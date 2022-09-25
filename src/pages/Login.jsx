import styled from "styled-components";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import LoginForm from "../components/forms/LoginForm";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

function Login() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/");
    }
  }, [user]);

  return (
    <PageContainer id="svg">
      <LoginForm />
    </PageContainer>
  );
}

export default Login;
