import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  color: #424242;
  padding-top: 0.35rem;
  padding-bottom: 0.25rem;
`;

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 2rem;
`;

const ListItem = styled.li`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0.25em 0.45em;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
`;

function NavBar({ variant }) {
  const { user } = useContext(UserContext);

  const linkStyles = { color: "black", textDecoration: "none" };

  const navigate = useNavigate();
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container>
        <img
          height="85px"
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...aJqxNLmhvFwXs1M3EMoAJtliYuj...Ni9...w4"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        <ItemList>
          <Link style={linkStyles} to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link style={linkStyles} to="/blogs/new">
            <ListItem>Note</ListItem>
          </Link>
          {user.isAuthenticated ? (
            <>
              <Link style={linkStyles} to="/logout">
                <ListItem
                  style={{
                    backgroundColor: "#009688",
                    color: "white",
                  }}
                >
                  Logout
                </ListItem>
              </Link>
            </>
          ) : (
            <>
              <Link style={linkStyles} to="/login">
                <ListItem>Login</ListItem>
              </Link>
              <Link style={linkStyles} to="/accounts/new">
                <ListItem
                  style={{ backgroundColor: "#009688", color: "white" }}
                >
                  Sign Up
                </ListItem>
              </Link>
            </>
          )}
        </ItemList>
      </Container>
    </AppBar>
  );
}

export default NavBar;
