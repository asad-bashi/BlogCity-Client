import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../App";
import { PageContainer } from "./PageHelper";
import EditCommentForm from "../components/forms/EditCommentForm";

const Message = styled.p`
  font-size: 1.4rem;
`;
function EditComment() {
  const { id } = useParams();
  const [comment, setComment] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getComment() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/comments/${id}`
      );
      setComment(data);
    }
    getComment();
  }, []);

  return (
    <PageContainer id="svg">
      {user.isAuthenticated && user.id === comment.user_id ? (
        <EditCommentForm comment={comment} setComment={setComment} />
      ) : (
        <Message>
          {`You're not authorized to reach this page. You need to `}
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

export default EditComment;
