import styled from "styled-components";
import SignInForm from "../components/SignInForm";

const PageContainer = styled.div`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
function SignIn() {
  return (
    <PageContainer>
      <SignInForm />
    </PageContainer>
  );
}

export default SignIn;
