import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Stack, Modal } from "@mui/material";
import { Divider } from "@mui/material";
import { UserContext } from "../App";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CommentForm from "../components/forms/CommentForm";
import Comment from "../components/Comment";
import { v4 as uuidv4 } from "uuid";
import { Tooltip } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  font-weight: 300;
  row-gap: 0.75rem;
  margin-bottom: 5rem;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
`;

const BLogInfo = styled.div`
  padding: 0.75rem 1.4rem;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  color: #424242;
  padding: 0.75rem 1.4rem;
  &::first-letter {
    font-weight: 500;
    font-size: 2.5rem;
    color: black;
  }
`;

const CancelButton = styled.button`
  background-color: #009688;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`;

const ConfirmButton = styled.button`
  background-color: #c62828;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const DeleteConfirmation = styled.div`
  width: 500px;
  height: 200px;
  background-color: #eeeeee;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 1.4rem;
  align-items: center;
`;

function FullBLog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  const [img, setImg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(data);
        setImg(data.image.replaceAll("\\", "/"));
      } catch (e) {
        console.log(e);
      }
    }
    getBlog();

    async function getComments() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/comments/${id}`
        );
        setComments(data);
      } catch (e) {
        console.log(e);
      }
    }
    getComments();
  }, [id]);

  useEffect(() => {}, [comments]);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
    } catch (e) {}
    setIsModalOpen(false);
    navigate("/");
  }

  return (
    <Wrapper>
      {blog ? (
        <>
          <Modal
            disableAutoFocus={true}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "15rem",
            }}
            onClose={() => setIsModalOpen(false)}
            open={isModalOpen}
          >
            <DeleteConfirmation>
              <>
                <h2>Are you sure you want to delete</h2>
                <p>
                  blog will be
                  <span style={{ color: "#c62828" }}> permanently</span> be
                  lossed
                </p>
              </>
              <Stack gap={".55rem"} direction="row">
                <CancelButton onClick={() => setIsModalOpen(false)}>
                  CANCEL
                </CancelButton>
                <ConfirmButton onClick={handleDelete}>
                  YES, DELETE IT
                </ConfirmButton>
              </Stack>
            </DeleteConfirmation>
          </Modal>
          <Poster image={`http://localhost:5000/${img}`} />
          <BLogInfo>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
            >
              <h1>{blog.title}</h1>
              {user.id === blog.user_id ? (
                <Stack spacing={1.5} direction="row">
                  <Tooltip title="Edit" arrow>
                    <EditIcon
                      onClick={() => navigate(`/blogs/${id}/edit`)}
                      sx={{
                        fontSize: "30px",
                        "&:hover": { cursor: "pointer" },
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Delete" arrow>
                    <DeleteOutlineIcon
                      onClick={() => setIsModalOpen(true)}
                      sx={{
                        fontSize: "30px",
                        "&:hover": { cursor: "pointer" },
                      }}
                    />
                  </Tooltip>
                </Stack>
              ) : (
                ""
              )}
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Stack spacing={3} direction="row">
                <span>{blog.name}</span>
                <span>{blog.date}</span>
              </Stack>
              <span>{blog.tags}</span>
            </Stack>
          </BLogInfo>
          <Divider />
          <Main>{blog.body}</Main>
          <Divider />

          <p style={{ fontSize: "2rem" }}>Comments</p>
          {comments.map((comment) => {
            return (
              <>
                <Comment key={uuidv4()} comment={comment} />
                <Divider />
              </>
            );
          })}
          <CommentForm setComments={setComments} />
        </>
      ) : (
        <h1>blog not found</h1>
      )}
    </Wrapper>
  );
}
export default FullBLog;
