import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <Link style={{ color: "#424242", textDecoration: "none" }} to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link
            style={{ color: "#424242", textDecoration: "none" }}
            to="/blogs/new"
          >
            <ListItem>Create Blog</ListItem>
          </Link>
          <Link
            style={{ color: "#424242", textDecoration: "none" }}
            to="/sign-in"
          >
            <ListItem>Sign In</ListItem>
          </Link>
          <Link
            style={{ color: "#424242", textDecoration: "none" }}
            to="/accounts/new"
          >
            <ListItem>Create Account</ListItem>
          </Link>
        </ItemList>
      </Container>
    </Header>
  );
}

export default NavBar;
