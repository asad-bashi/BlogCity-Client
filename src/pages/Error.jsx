import styled from "styled-components";
import { Stack } from "@mui/material";
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 3rem;
`;

const Message = styled.h1`
  font-size: 9rem;
  font-weight: 500;
`;

function Error() {
  return (
    <PageContainer>
      <Stack mb={60} textAlign="center">
        <Message>404</Message>
        <p>Not Found</p>
      </Stack>
    </PageContainer>
  );
}

export default Error;
