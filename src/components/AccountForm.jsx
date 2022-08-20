import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import FormLabel from "./FormLabel";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  row-gap: 2rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 2rem 3rem;
`;

const NameContainer = styled.div`
  display: flex;
  gap: 1.5rem;
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

function AccountForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await axios.post("http://localhost:5000/api/users", {
      firstName,
      lastName,
      email,
      password,
    });

    setHelperText(data);
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormLabel>Account Registration</FormLabel>
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
