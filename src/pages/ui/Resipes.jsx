import { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";

const Resipes = () => {
  const { setTitle, setSubtitle } = useTitle();

  useEffect(() => {
    setTitle(`Recipes Items `);
    setSubtitle('You can now add your items that any user can order it from the Application and you can edit');
  }, [setTitle, setSubtitle]);

  return (
    <div>Resipes</div>
  )
}

export default Resipes