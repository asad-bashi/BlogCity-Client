import styled from "styled-components";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  max-width: 750px;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Body = styled.p`
  color: white;
  max-width: 45ch;
  font-size: 1.4rem;
`;

const Author = styled.p`
  color: white;
  font-size: 1.1rem;
`;

const Button = styled.button`
  padding: 0.65rem 1.2rem;
  font-size: 1.1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #009688;
  color: white;
  transition: 100ms ease-in-out;
  &:hover {
    background-color: #004d40;
    cursor: pointer;
  }
`;

function ShowCaseItem({ title, body, name, image, id }) {
  const navigate = useNavigate();
  return (
    <Wrapper image={image}>
      <Content>
        <Title>{title}</Title>
        <Body>{`${body.slice(0, 150)}`}</Body>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Author>by {name}</Author>
          <Button onClick={() => navigate(`/blogs/${id}`)}>Read More</Button>
        </Stack>
      </Content>
    </Wrapper>
  );
}
export default ShowCaseItem;
