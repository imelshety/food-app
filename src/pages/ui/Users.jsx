import { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";

const Users = () => {
  const { setTitle, setSubtitle } = useTitle();

  useEffect(() => {
    setTitle(`Users List `);
    setSubtitle('You can now add your items that any user can order it from the Application and you can edit');
  }, [setTitle, setSubtitle]);

  return (
    <div>Users</div>
  )
}

export default Users