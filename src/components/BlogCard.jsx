import styled from "styled-components";
import Roses from "../images/roses.jpg";
import { Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 400px;
  height: fit-content;

  transition: 150ms ease-in;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const BlogImg = styled.div`
  background-image: url(${Roses});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 350px;
`;

const BlogContent = styled.div`
  padding: 2rem 3rem;
  display: flex;
  row-gap: 1.5rem;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const BlogTitle = styled.h1`
  user-select: none;
  transition: 150ms ease-in;
  &:hover {
    color: #009688;
    cursor: pointer;
  }
`;

//limit the number of characters body can display
//with remainder being replaced with ...
const BlogBody = styled.p`
  user-select: none;
`;

function BlogCard({ id, title, body, date, name }) {
  const navigate = useNavigate();

  return (
    <BlogContainer onClick={(e) => navigate(`/blogs/${id}`)}>
      <BlogImg />
      <BlogContent>
        <Stack direction="row" spacing={5}>
          <span>by {name}</span>
          <span>{date}</span>
        </Stack>
        <BlogTitle>{title}</BlogTitle>
        <BlogBody>{`${body.slice(0, 372)}`}</BlogBody>
        <Divider />
        <p>tags</p>
      </BlogContent>
    </BlogContainer>
  );
}

export default BlogCard;
