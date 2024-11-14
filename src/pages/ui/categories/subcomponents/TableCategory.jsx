/* eslint-disable react/prop-types */
import { Table, Dropdown } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import styles from "./tableCategory.module.css";
import NoData from "../../../../components/shared/nodata/NoData";

const TableCategory = ({ categories, onView, onEdit, onDelete  }) => {
  return (
    <Table hover responsive className={`mt-3 ${styles.customTable}`}>
      <thead>
        <tr className={styles.tableHeader}>
          <th>Items Name</th>
          <th>Creation Date</th>
          <th>Modification Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      {categories && categories.length > 0 ? (
          categories.map((category, index) => (
      <tbody key={index}>
      
            <tr >
              <td>{category.name}</td>
              <td>{category.creationDate}</td>
              <td>{category.modificationDate}</td>
              <td className={styles.actionCell}>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" bsPrefix={styles.dotsToggle}>
                    ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item 
                      onClick={() => onView(category)}
                    href="#" className={styles.dropdownItem}>
                      <FaEye className={styles.actionIcon} /> View
                    </Dropdown.Item>
                    <Dropdown.Item 
                      onClick={() => onEdit(category)}
                    href="#" className={styles.dropdownItem}>
                      <FaEdit className={styles.actionIcon} /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                    onClick={() => onDelete(category)}
                    href="#" className={styles.dropdownItem}>
                      <FaTrash className={styles.actionIcon} /> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            </tbody>
          ))
        ) 
   
      : (
        <NoData/>
      )}
    </Table>
  );
};

export default TableCategory;
