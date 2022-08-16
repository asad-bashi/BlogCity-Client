import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 3px solid green;
  width: 500px;
  row-gap: 2rem;
`;

const NameContainer = styled.div`
  display: flex;
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
      <button>Create Account</button>
    </Form>
  );
}

export default AccountForm;
