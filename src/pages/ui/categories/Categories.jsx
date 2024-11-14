import { useEffect, useState } from "react";
import { useTitle } from "../../../context/TitleContext";
import styles from "./categories.module.css";
import TableCategory from "./subcomponents/TableCategory";
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';  // Import Modal components
import { BASE_URL } from "../../../services/url";
import { toast } from "react-toastify";

const Categories = () => {
  const { setTitle, setSubtitle } = useTitle();
  const [newCategoryName, setNewCategoryName] = useState(""); // State for category name input
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [showViewModal, setShowViewModal] = useState(false); // View modal
  const [showEditModal, setShowEditModal] = useState(false); // Edit modal
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Delete confirmation modal
  const [selectedCategory, setSelectedCategory] = useState(null); // Store selected category data for view/edit/delete
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  useEffect(() => {
    setTitle("Categories List ");
    setSubtitle(
      "You can now add your items that any user can order from the Application, and you can edit."
    );
    fetchCategories(); // Fetch categories when component mounts
  }, [setTitle, setSubtitle]);
console.log(isLoading);

  // Fetch categories from the API
  const fetchCategories = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/Category/?pageSize=8&pageNumber=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCategories(response.data.data || []);
        setIsLoading(false);  // Stop loading
        toast.success("get all Categories successfully");
      })
      .catch((error) => {
        setIsLoading(false);  // Stop loading on error
        toast.error("Error fetching categories!");  // Show error toast
        console.error("Error fetching categories:", error);
      });
  };

  // Handle category creation
  const handleAddCategory = () => {
    const token = localStorage.getItem("token");
    if (newCategoryName.trim() === "") return;
    setIsLoading(true);  // Start loading
    axios
      .post(
        `${BASE_URL}/Category/`,
        { name: newCategoryName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setCategories([...categories, response.data]); // Add the new category to the table
        setShowModal(false); // Close the modal after adding the category
        setNewCategoryName(""); // Reset the input field
        setIsLoading(false);  // Stop loading
        toast.success("Category added successfully!");  // Success toast
      })
      .catch((error) => {
        console.error("Error adding category:", error);
        setIsLoading(false);  // Stop loading on error
        toast.error("Error adding category!");  // Show error toast
      });
  };

  // Handle category deletion
const handleDeleteCategory = () => {
  const token = localStorage.getItem("token");
  if (!selectedCategory) return;
  setIsLoading(true);  // Start loading
  axios
    .delete(`${BASE_URL}/Category/${selectedCategory.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      // Remove the deleted category from the list
      setCategories(categories.filter((category) => category.id !== selectedCategory.id));
      setShowDeleteModal(false); // Close the modal after deleting
      setIsLoading(false);  // Stop loading
      toast.error("Category deleted successfully!");  // Success toast
      // Clear selected category to prevent stale data issues
      setSelectedCategory(null);
    })
    .catch((error) => {
      console.error("Error deleting category:", error);
      setIsLoading(false);  // Stop loading on error
      toast.error("Error deleting category!");  // Show error toast
    });
};

  // Handle category update
  const handleEditCategory = () => {
    const token = localStorage.getItem("token");
    if (selectedCategory.name.trim() === "") return;

    axios
      .put(
        `${BASE_URL}/Category/${selectedCategory.id}`,
        { name: selectedCategory.name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setCategories(categories.map((category) => 
          category.id === selectedCategory.id ? selectedCategory : category
        ));
        setShowEditModal(false); // Close the modal after editing
        setIsLoading(false);  // Stop loading
      toast.success("Category edited successfully!");  // Success toast
      })
      .catch((error) => {
        console.error("Error updating category:", error);
        setIsLoading(false);  // Stop loading on error
        toast.error("Error editing category!");  // Show error toast
      });
  };

  return (
    <div className="d-flex flex-column ps-2 my-3">
      <div className="d-flex justify-content-between align-items-center px-4">
        <div>
          <h3 className={styles.heading}>Categories Table Details</h3>
          <p className={styles.desc}>You can check all details</p>
        </div>
        <div>
          {/* Button to open the modal */}
          <button onClick={() => setShowModal(true)} className={styles.btn}>
            Add New Category
          </button>
        </div>
      </div>

      {/* Table displaying categories */}
      <TableCategory categories={categories} 
        onView={(category) => { setSelectedCategory(category); setShowViewModal(true); }}
        onEdit={(category) => { setSelectedCategory(category); setShowEditModal(true); }}
        onDelete={(category) => { setSelectedCategory(category); setShowDeleteModal(true); }} />

      {/* Modal to add a new category */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddCategory}>Add Category</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for viewing category */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Category Name:</strong> {selectedCategory?.name}</p>
          <p><strong>Creation Date:</strong> {selectedCategory?.creationDate}</p>
          <p><strong>Modification Date:</strong> {selectedCategory?.modificationDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for editing category */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={selectedCategory?.name || ''}
                onChange={(e) => setSelectedCategory({...selectedCategory, name: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleEditCategory}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for deleting category */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the category {selectedCategory?.name}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteCategory}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Categories;
