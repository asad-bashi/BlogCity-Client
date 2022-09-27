import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import { Form, Label, Button } from "./FormHelpers";
import TagTray from "../TagTray";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [helperText, setHelperText] = useState("");
  const [tags, setTags] = useState([]);
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let selectedTags = "";
    tags.forEach(({ tag, isSelected }) => {
      if (isSelected) {
        if (selectedTags) {
          selectedTags = selectedTags.concat(`, ${tag} `);
        } else {
          selectedTags = selectedTags.concat(`${tag}`);
        }
      }
    });
    const { data } = await axios.post(
      "http://localhost:5000/api/blogs/",
      {
        title,
        body,
        selectedTags,
        img,
      },
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    setHelperText(data.message);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Label>Tell your story</Label>
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

      <TagTray tags={tags} setTags={setTags} />

      <input type="file" onChange={(e) => setImg(e.target.files[0])} />

      <Button>Share</Button>
      <p
        style={{
          textAlign: "center",
          display: helperText ? "inline" : "none",
        }}
      >
        {helperText}
      </p>
    </Form>
  );
}

export default BlogForm;
