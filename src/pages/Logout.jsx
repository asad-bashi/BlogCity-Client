import { useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";

function Logout() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    async function logoutUser() {
      try {
        await axios.post("http://localhost:5000/api/logout");
        const isValid = await axios.get("http://localhost:5000/api/isAuth");
        setUser(isValid);
      } catch (e) {
        console.log(e);
      }
    }
    logoutUser();
  });
  return <>logout</>;
}

export default Logout;
