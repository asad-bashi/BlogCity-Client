import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import styled from "styled-components";
import FormLabel from "./FormLabel";
import FormButton from "./FormButton";

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

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [img, setImg] = useState("");
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
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormLabel>Tell your story</FormLabel>
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
      {/* <input
        value={img}
        onChange={(e) => setImg(e.target.value)}
        type="file"
        name="img"
        id=""
      /> */}
      <FormButton>Share</FormButton>
      <p>{helperText}</p>
    </Form>
  );
}

export default BlogForm;
