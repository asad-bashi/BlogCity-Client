import { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";
import { PageContainer } from "./PageHelper";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const Message = styled.p`
  font-size: 1.4rem;
`;

const LogoutContainer = styled.div`
  display: flex;
  row-gap: 3rem;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 200px;
  font-weight: 300;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
function Logout() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function logoutUser() {
      if (!user.isAuthenticated) {
        return;
      }
      try {
        setTimeout(async () => {
          await axios.post(`${process.env.REACT_APP_BASE_URL}api/logout`);
          const isValid = await axios.get(
            `${process.env.REACT_APP_BASE_URL}api/isAuth`
          );
          setUser(isValid);
          navigate("/");
        }, 2000);
      } catch (e) {
        console.log(e);
      }
    }
    logoutUser();
  }, []);
  return (
    <PageContainer>
      {user.isAuthenticated ? (
        <LogoutContainer>
          <p>One moment while we log you out securely</p>
          <CircularProgress sx={{ color: "#009688" }} />
        </LogoutContainer>
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
