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

const CommentName = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
`;

const CommentText = styled.p`
  user-select: none;
`;

function Comment({ comment }) {
  const { user } = useContext(UserContext);
  const [showOptions, setShowOptions] = useState(false);

  function handleClick() {
    setShowOptions((prev) => !prev);
  }

  function handleClickAway() {
    setShowOptions(false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
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
                <Stack rowGap={0.5} alignItems="center">
                  <Stack
                    sx={{ width: "100%", "&:hover": { cursor: "pointer" } }}
                    justifyContent="space-between"
                    direction="row"
                  >
                    <EditIcon />
                    <CommentText>Edit</CommentText>
                  </Stack>
                  <Stack
                    sx={{
                      width: "100%",
                      "&:hover": { cursor: "pointer", backgroundColor: "" },
                    }}
                    justifyContent="space-between"
                    direction="row"
                  >
                    <DeleteOutlineIcon />
                    <CommentText>Delete</CommentText>
                  </Stack>
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
    </ClickAwayListener>
  );
}

export default Comment;
