import { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  row-gap: 2rem;
`;
function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:5000/api/sign-in", {
      email,
      password,
    });
    console.log(data);
    setHelperText(data);
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        label="email"
        type="email"
      />
      <TextField
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        label="password"
        type="password"
      />
      <button>Submit</button>
      <h3>{helperText}</h3>
    </Form>
  );
}

export default SignInForm;
