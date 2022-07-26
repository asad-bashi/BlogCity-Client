import styled from "styled-components";
import AccountForm from "../components/AccountForm";
import BlogForm from "../components/BlogForm";
import NavBar from "../components/NavBar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

function Home() {
  return (
    <PageContainer>
      <NavBar />
      <BlogForm />
      <AccountForm />
    </PageContainer>
  );
}

export default Home;
