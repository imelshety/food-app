import { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";

const Categories = () => {
  const { setTitle, setSubtitle } = useTitle();

  useEffect(() => {
    setTitle(`Categories List `);
    setSubtitle('You can now add your items that any user can order it from the Application and you can edit');
  }, [setTitle, setSubtitle]);

  return (
    <div>Categories</div>
  )
}

export default Categories