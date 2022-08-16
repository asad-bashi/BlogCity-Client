import styled from "styled-components";
import AccountForm from "../components/AccountForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
function CreateAccount() {
  return (
    <PageContainer>
      <AccountForm />
    </PageContainer>
  );
}

export default CreateAccount;
