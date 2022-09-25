import { TextField } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "./FormHelpers";
import axios from "axios";
import { useParams } from "react-router-dom";


function CommentForm({ setComments }) {
  const [comment, setComment] = useState("");
  const [helperText, setHelperText] = useState("");

  const { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/comments/", {
        comment,
        blog_id: id,
      });

      const req = await axios.get(`http://localhost:5000/api/comments/${id}`);
      console.log(req);
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
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          multiline
          rows={5}
        />
        <Button>Post Comment</Button>
        <p>{helperText}</p>
      </Stack>
    </form>
  );
}

export default CommentForm;
