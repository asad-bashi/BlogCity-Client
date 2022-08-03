import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  border: 2px solid red;
  color: #eeeeee;
  padding: 2rem;
`;

const Header = styled.header`
  width: 100vw;
  background-color: black;
`;

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 2rem;
`;

const ListItem = styled.li`
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;

function NavBar() {
  return (
    <Header>
      <Container>
        <p>LOGO</p>
        <ItemList>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/create-blog"
          >
            <ListItem>Create Blog</ListItem>
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/sign-in">
            <ListItem>Sign In</ListItem>
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/create-account"
          >
            <ListItem>Create Account</ListItem>
          </Link>
        </ItemList>
      </Container>
    </Header>
  );
}

export default NavBar;
