import { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import FormLabel from "./FormLabel";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  row-gap: 2rem;
  padding: 2rem 3rem;
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
  border-radius: 100px;
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
      <FormLabel>Sign In</FormLabel>
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
      <Button>Log In</Button>
      <h3>{helperText}</h3>
    </Form>
  );
}

export default SignInForm;
