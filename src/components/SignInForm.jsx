import { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  row-gap: 2rem;
`;
function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <TextField label="email" type="email" />
      <TextField label="password" type="password" />
      <button>Submit</button>
    </Form>
  );
}

export default SignInForm;
