import { useState, useContext } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import FormLabel from "./FormLabel";
import FormButton from "./FormButton";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
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

function LoginForm() {
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const isValid = await axios.get("http://localhost:5000/api/isAuth");
      console.log(isValid);
      setAuthenticated(isValid);

      console.log(data);
      setHelperText(data.message);
      if (isAuthenticated) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormLabel>Login</FormLabel>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="email"
        type="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="password"
        type="password"
      />
      <FormButton>Log In</FormButton>
      <h3>{helperText}</h3>
    </Form>
  );
}

export default LoginForm;
