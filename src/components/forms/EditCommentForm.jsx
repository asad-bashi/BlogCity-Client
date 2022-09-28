import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Label } from "./FormHelpers";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditCommentForm({ comment }) {
  const { id } = useParams();
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setBody(comment.body);
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/comments/${id}`, {
      body,
    });
    navigate(`/blogs/${comment.blog_id}`);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Label>Edit Comment</Label>
      <TextField
        required
        onChange={(e) => setBody(e.target.value)}
        value={body}
        label="Comment"
      />

      <Button>Edit</Button>
    </Form>
  );
}

export default EditCommentForm;
