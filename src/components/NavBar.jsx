import styled from "styled-components";
import { Link } from "react-router-dom";
import { padding } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../App";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  color: #424242;
  padding: 2rem;
`;

const Header = styled.header`
  width: 100vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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

  return (
    <Header>
      <Container>
        <p>LOGO</p>
        <ItemList>
          <Link style={{ color: "#424242", textDecoration: "none" }} to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link
            style={{ color: "#424242", textDecoration: "none" }}
            to="/blogs/new"
          >
            <ListItem>Note</ListItem>
          </Link>
          {user.isAuthenticated ? (
            <>
              <Link
                style={{ color: "#424242", textDecoration: "none" }}
                to="/logout"
              >
                <ListItem
                  style={{ backgroundColor: "#009688", color: "white" }}
                >
                  Logout
                </ListItem>
              </Link>
            </>
          ) : (
            <>
              <Link
                style={{ color: "#424242", textDecoration: "none" }}
                to="/login"
              >
                <ListItem>Login</ListItem>
              </Link>
              <Link
                style={{ color: "#424242", textDecoration: "none" }}
                to="/accounts/new"
              >
                <ListItem
                  style={{ backgroundColor: "#009688", color: "white" }}
                >
                  Sign Up
                </ListItem>
              </Link>
            </>
          )}

          {/* <Link
            style={{ color: "#424242", textDecoration: "none" }}
            to="/login"
          >
            <ListItem>Login</ListItem>
          </Link>
          <Link
            style={{ color: "#424242", textDecoration: "none" }}
            to="/accounts/new"
          >
            <ListItem style={{ backgroundColor: "#009688", color: "white" }}>
              Join Us
            </ListItem>
          </Link> */}
        </ItemList>
      </Container>
    </Header>
  );
}

export default NavBar;
