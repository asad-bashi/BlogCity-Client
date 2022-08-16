import styled from "styled-components";
import SignInForm from "../components/SignInForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
