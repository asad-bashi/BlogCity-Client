import { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";
import { PageContainer } from "./PageHelper";

const Message = styled.p`
  font-size: 1.4rem;
`;

function Logout() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function logoutUser() {
      if (!user.isAuthenticated) {
        return;
      }
      try {
        await axios.post("http://localhost:5000/api/logout");
        const isValid = await axios.get("http://localhost:5000/api/isAuth");
        setUser(isValid);
        console.log("post made");
      } catch (e) {
        console.log(e);
      }
    }
    logoutUser();
  }, []);
  return (
    <PageContainer>
      {user.isAuthenticated ? (
        ""
      ) : (
        <Message>
          {`You're not authorized to reach this page. You need to `}
          <Link
            style={{ textDecoration: "none", color: "#009688" }}
            to="/login"
          >
            Log In.
          </Link>
        </Message>
      )}
    </PageContainer>
  );
}

export default Logout;

