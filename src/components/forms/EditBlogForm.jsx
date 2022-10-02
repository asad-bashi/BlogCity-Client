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

    await axios.put(`${process.env.REACT_APP_BASE_URL}api/blogs/${blog.id}`, {
      title,
      body,
    });
    navigate(`/blogs/${blog.id}`);
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
