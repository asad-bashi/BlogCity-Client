import styled from "styled-components";
import { Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Badge } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688",
    },
  },
});
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
  background-image: url(${(props) => props.image});
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

const BlogBody = styled.p`
  user-select: none;
`;

function BlogCard({ id, title, body, date, name, tags, image, numOfComments }) {
  const navigate = useNavigate();

  return (
    <BlogContainer onClick={(e) => navigate(`/blogs/${id}`)}>
      <BlogImg image={`${process.env.REACT_APP_BASE_URL}${image}`} />
      <BlogContent>
        <Stack direction="row" spacing={5}>
          <span style={{ whiteSpace: "nowrap" }}>by {name}</span>
          <span style={{ whiteSpace: "nowrap" }}>{date}</span>
        </Stack>
        <BlogTitle>{title}</BlogTitle>
        <BlogBody>{`${body.slice(0, 300)}`}</BlogBody>

        <Divider textAlign="right">
          <ThemeProvider theme={theme}>
            <Badge color="primary" badgeContent={numOfComments}>
              <ChatBubbleOutlineIcon sx={{ color: "#757575" }} />
            </Badge>
          </ThemeProvider>
        </Divider>

        <p>{tags}</p>
      </BlogContent>
    </BlogContainer>
  );
}

export default BlogCard;
