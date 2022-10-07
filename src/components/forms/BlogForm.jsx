import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import FormData from "form-data";
import { TextField } from "@mui/material";
import { Form, Label, Button } from "./FormHelpers";
import TagTray from "../TagTray";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Tooltip } from "@mui/material";
function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [helperText, setHelperText] = useState("");
  const [tags, setTags] = useState([]);
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
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

    // const form = new FormData();
    // form.append("title", title);
    // form.append("body", body);
    // form.append("selectedTags", selectedTags);
    // form.append("img", img, img.name);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/blogs/`,
        {
          title,
          body,
          selectedTags,
          img,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setHelperText(data.message);
      if (data.id) {
        navigate(`/blogs/${data.id}`);
      }
    } catch (e) {
      console.log(e);
    }
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

      <label htmlFor="image-upload">
        <Tooltip title="add image">
          <AddPhotoAlternateIcon
            sx={{ color: "#009688", fontSize: "30px", cursor: "pointer" }}
          />
        </Tooltip>
      </label>
      <input
        style={{
          display: "none",
        }}
        id="image-upload"
        type="file"
        onChange={(e) => setImg(e.target.files[0])}
      />

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
