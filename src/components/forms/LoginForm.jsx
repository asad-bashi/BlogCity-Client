import { useState, useContext } from "react";
import { TextField, Stack } from "@mui/material";
import axios from "axios";
import { UserContext } from "../../App";
import { useNavigate, Link } from "react-router-dom";
import { Form, Label, Button } from "./FormHelpers";

axios.defaults.withCredentials = true;

function LoginForm() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  axios.defaults.withCredentials = true;
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/login`,
        {
          email,
          password,
        }
      );
      console.log(data);
      const userObj = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/isAuth`
      );

      console.log(userObj);
      setUser(userObj.data);
      setHelperText(data.message);

      if (userObj.data.isAuthenticated) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Label>Login</Label>
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
      <h3>{helperText}</h3>
      <Button>Log In</Button>
      <Stack
        fontSize="1.2rem"
        direction="row"
        spacing={1}
        justifyContent="center"
      >
        <span>Not a member?</span>
        <Link
          style={{ textDecoration: "none", color: "#009688" }}
          to="/accounts/new"
        >
          Sign Up
        </Link>
      </Stack>
    </Form>
  );
}

export default LoginForm;
