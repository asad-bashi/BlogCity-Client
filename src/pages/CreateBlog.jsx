import styled from "styled-components";
import BlogForm from "../components/BlogForm";
import Img from "../images/coffee.jpg";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding-top: 7rem;
`;

function CreateBlog() {
  return (
    <PageContainer>
      <BlogForm />
    </PageContainer>
  );
}

export default CreateBlog;
