import { useState, useContext } from "react";
import { TextField, Stack } from "@mui/material";
import axios from "axios";
import { UserContext } from "../../App";
import { useNavigate, Link } from "react-router-dom";
import { Form, Label, Button } from "./FormHelpers";
import CircularProgress from "@mui/material/CircularProgress";

axios.defaults.withCredentials = true;

function LoginForm() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  axios.defaults.withCredentials = true;
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/login`,
        {
          email,
          password,
        }
      );
      const userObj = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/isAuth`
      );
      setUser(userObj.data);
      setHelperText(data.message);
      setIsLoading(false);

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
      <>
        {isLoading ? (
          <CircularProgress sx={{ color: "#009688" }} />
        ) : (
          <p style={{ fontSize: "1.2rem" }}>{helperText}</p>
        )}
      </>
      <Button>Log In</Button>
      <Stack
        fontSize="1.2rem"
        direction="row"
        spacing={1}
        justifyContent="center"
      >
        <p>Not a member?</p>
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
