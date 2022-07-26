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
  const [content, setContent] = useState("");
  const [helperText, setHelperText] = useState("");
  async function submitBlog(e) {
    e.preventDefault();
    if (title && content) {
      console.log("request sent");
      const { data } = await axios.post("http://localhost:5000/api/blogs", {
        title,
        content,
      });
      setHelperText(data);
    } else {
      setHelperText("Invalid Blog Combination");
    }
  }

  return (
    <Form onSubmit={(e) => submitBlog(e)}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        id="title"
        label="Blog Title"
      />
      <TextField
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Enter Blog Content"
        multiline
        maxRows={5}
      />
      <button>submit</button>
      <p>{helperText}</p>
    </Form>
  );
}

export default BlogForm;
