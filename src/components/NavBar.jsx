import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";
import "../index.css";

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

const Nav = styled.nav`
  @media (max-width: 750px) {
    display: none;
  }
`;

const MobileIcon = styled.span`
  display: none;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 750px) {
    display: inline;
  }
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

function NavBar() {
  const { user } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const linkStyles = { color: "black", textDecoration: "none" };

  const navigate = useNavigate();
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Drawer
        anchor="right"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        <ul className="ItemList">
          {user.isAuthenticated ? (
            <>
              <li className="ListItem">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    width: "100%",
                    color: "inherit",
                  }}
                  to="/blogs/new"
                >
                  Write
                </Link>
              </li>
              <li className="ListItem">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    width: "100%",
                    color: "inherit",
                  }}
                  to={`/accounts/${user.id}`}
                >
                  Profile
                </Link>
              </li>
              <li className="ListItem">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    width: "100%",
                    color: "inherit",
                  }}
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="ListItem">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    width: "100%",
                    color: "inherit",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="ListItem">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    width: "100%",
                    color: "inherit",
                  }}
                  to="/accounts/new"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </Drawer>
      <Container>
        <img
          height="85px"
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...aJqxNLmhvFwXs1M3EMoAJtliYuj...Ni9...w4"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        <MobileIcon onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon sx={{ fontSize: "40px", color: "#757575" }} />
        </MobileIcon>
        <Nav>
          <ItemList>
            {user.isAuthenticated ? (
              <>
                <Link style={linkStyles} to="/blogs/new">
                  <ListItem>Write</ListItem>
                </Link>
                <Link style={linkStyles} to={`/accounts/${user.id}`}>
                  <ListItem>Profile</ListItem>
                </Link>
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
        </Nav>
      </Container>
    </AppBar>
  );
}

export default NavBar;
