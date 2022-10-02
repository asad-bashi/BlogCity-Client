import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../App";
import EditBlogForm from "../components/forms/EditBlogForm";
import { PageContainer } from "./PageHelper";

const Message = styled.p`
  font-size: 1.4rem;
`;
function EditBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getBlog() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/blogs/${id}`
      );
      setBlog(data);
    }
    getBlog();
  }, []);

  return (
    <PageContainer id="svg">
      {user.isAuthenticated && user.id === blog.user_id ? (
        <EditBlogForm blog={blog} setBlog={setBlog} />
      ) : (
        <Message>
          {blog
            ? `You're not authorized to reach this page. You need to `
            : `Blog Not Found`}
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

export default EditBlog;
