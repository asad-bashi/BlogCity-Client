import { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 3px solid red;
  width: 500px;
  row-gap: 2rem;
`;

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [helperText, setHelperText] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await axios.post("http://localhost:5000/api/blogs/", {
      title,
      body,
    });
    setHelperText(data);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        id="title"
        label="Blog Title"
        required
      />
      <TextField
        onChange={(e) => setBody(e.target.value)}
        value={body}
        placeholder="Enter Blog Content"
        multiline
        rows={5}
        required
      />
      <button>submit</button>
      <p>{helperText}</p>
    </Form>
  );
}

export default BlogForm;
