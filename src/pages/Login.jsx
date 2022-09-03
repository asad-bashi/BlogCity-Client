import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const PageContainer = styled.div`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
function Login() {
  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
}

export default Login;
