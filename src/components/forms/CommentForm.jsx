import { TextField } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "./FormHelpers";
import axios from "axios";
import { useParams } from "react-router-dom";

function CommentForm({ setComments }) {
  const [body, setBody] = useState("");
  const [helperText, setHelperText] = useState("");
  axios.defaults.withCredentials = true;
  const { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/comments/`,
        {
          comment: body,
          blog_id: id,
        }
      );

      const req = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/commentsByBlogId/${id}`
      );

      setComments(req.data);
      setHelperText(data.message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Stack mt={3} rowGap={3}>
        <TextField
          required
          placeholder="Leave a comment..."
          fullWidth
          onChange={(e) => setBody(e.target.value)}
          value={body}
          multiline
          rows={5}
        />
        <Button>Post Comment</Button>
        <p style={{ textAlign: "center" }}>{helperText}</p>
      </Stack>
    </form>
  );
}

export default CommentForm;
