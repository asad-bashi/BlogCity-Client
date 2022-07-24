import styled from "styled-components";

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
    <header style={{ width: "100vw", backgroundColor: "black" }}>
      <Container>
        <p>LOGO</p>
        <ItemList>
          <ListItem>Home</ListItem>
          <ListItem>Create Blog</ListItem>
          <ListItem>Sign In</ListItem>
          <ListItem>Create Account</ListItem>
        </ItemList>
      </Container>
    </header>
  );
}

export default NavBar;
