import NavBar from "../components/NavBar";
import styled from "styled-components";
import BlogForm from "../components/BlogForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

function CreateBlog() {
  return (
    <PageContainer>
      <NavBar />
      <BlogForm />
    </PageContainer>
  );
}

export default CreateBlog;
