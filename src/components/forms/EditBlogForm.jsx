import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Label } from "./FormHelpers";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function EditBlogForm({ blog, setBlog }) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(blog.title);
    setBody(blog.body);
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/blogs/${blog.id}`, {
      title,
      body,
    });

    navigate(`/blogs/${id}`);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Label>Edit Story</Label>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        label="Title"
      />
      <TextField
        onChange={(e) => setBody(e.target.value)}
        value={body}
        placeholder="Enter Blog Content"
        multiline
        rows={5}
        label="Body"
      />
      <Button>Edit</Button>
    </Form>
  );
}

export default EditBlogForm;
