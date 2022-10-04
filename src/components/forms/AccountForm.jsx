import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

import { Form, Label, Button } from "./FormHelpers";
axios.defaults.withCredentials = true;
const NameContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

function AccountForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}api/users`,
      {
        firstName,
        lastName,
        email,
        password,
      }
    );

    setHelperText(data.message);

    if (data.isValid) {
      navigate(`/login`);
    }
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Label>Account Registration</Label>
      <NameContainer>
        <TextField
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
          label="First name"
        />
        <TextField
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
          label="Last name"
        />
      </NameContainer>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        fullWidth
        required
        label="Email"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        fullWidth
        required
        label="Password"
      />
      <p>{helperText}</p>
      <Button>Create Account</Button>
    </Form>
  );
}

export default AccountForm;
