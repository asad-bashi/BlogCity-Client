import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { UserContext } from "../App";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ClickAwayListener } from "@mui/base";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import axios from "axios";

const CommentName = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
`;

const CommentText = styled.p`
  user-select: none;
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

const CommentOption = styled.div`
  display: flex;
  justify-content: space-between;
  transition: 100ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: #009688;
  }
`;

function Comment({ comment, setComments }) {
  const { user } = useContext(UserContext);
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  function handleClick() {
    setShowOptions((prev) => !prev);
  }

  function handleEdit() {
    navigate(`/comments/${comment.id}/edit`);
  }

  function handleClickAway() {
    setShowOptions(false);
  }

  async function handleDelete() {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}api/comments/${comment.id}`
      );
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/commentsByBlogId/${comment.blog_id}`
      );
      console.log(data);
      setComments(data);
    } catch (e) {}
    setIsModalOpen(false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
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
                comment will be
                <span style={{ color: "#c62828" }}> permanently</span> be lossed
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
        <Stack my={1} alignItems="center" direction="row">
          <AccountCircleIcon
            sx={{ fontSize: "45px", color: "#009688", width: "75px" }}
          />
          <Stack flexGrow="1" ml={1} rowGap>
            <CommentName>{comment.name}</CommentName>
            <p>{comment.body}</p>
          </Stack>
          {user.id === comment.user_id ? (
            <>
              {showOptions ? (
                <Paper sx={{ py: 1, px: 2, width: "125px" }}>
                  <Stack rowGap={1}>
                    <CommentOption
                      onClick={handleEdit}
                      sx={{ width: "100%", "&:hover": { cursor: "pointer" } }}
                      justifyContent="space-between"
                      direction="row"
                    >
                      <EditIcon />
                      <CommentText>Edit</CommentText>
                    </CommentOption>
                    <CommentOption
                      onClick={() => setIsModalOpen(true)}
                      justifyContent="space-between"
                      direction="row"
                    >
                      <DeleteOutlineIcon />
                      <CommentText>Delete</CommentText>
                    </CommentOption>
                  </Stack>
                </Paper>
              ) : (
                ""
              )}
              <MoreVertIcon
                sx={{ "&:hover": { cursor: "pointer" } }}
                onClick={handleClick}
              />
            </>
          ) : (
            ""
          )}
        </Stack>
      </div>
    </ClickAwayListener>
  );
}

export default Comment;
