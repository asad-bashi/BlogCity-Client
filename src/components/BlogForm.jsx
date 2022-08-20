import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import styled from "styled-components";
import FormLabel from "./FormLabel";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  width: 500px;
  row-gap: 2rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #009688;
  color: white;
`;

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [helperText, setHelperText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { data } = await axios.post("http://localhost:5000/api/blogs/", {
      title,
      body,
    });
    setHelperText(data);
    setLoading(false);
    navigate("/");
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormLabel>Create Blog</FormLabel>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        id="title"
        label="Blog Title"
      />
      <TextField
        onChange={(e) => setBody(e.target.value)}
        value={body}
        placeholder="Enter Blog Content"
        multiline
        rows={5}
        required
      />
      <Button>Share</Button>
      <p>{helperText}</p>
    </Form>
  );
}

export default BlogForm;
