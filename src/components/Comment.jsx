import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { UserContext } from "../App";

const CommentName = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
`;

function Comment({ comment }) {
  const { user } = useContext(UserContext);

  function handleClick() {}

  return (
    <Stack my={1} alignItems="center" direction="row">
      <AccountCircleIcon
        sx={{ fontSize: "45px", color: "#009688", width: "75px" }}
      />
      <Stack flexGrow="1" ml={1} rowGap>
        <CommentName>{comment.name}</CommentName>
        <p>{comment.body}</p>
      </Stack>
      {user.id === comment.user_id ? (
        <MoreVertIcon onClick={handleClick} />
      ) : (
        ""
      )}
    </Stack>
  );
}

export default Comment;
