import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { PageContainer } from "./PageHelper";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";

const Message = styled.p`
  font-size: 1.4rem;
`;

function ProfilePage() {
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/users/${id}`
      );
      setUser(data);
    }
    getUser();
    async function getBlogs() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/blogs-by-userid/${id}`
      );
      setBlogs(data);
    }
    getBlogs();
  }, [id]);

  return (
    <PageContainer>
      <Stack alignItems="center">
        <AccountCircleIcon
          sx={{ fontSize: "45px", color: "#009688", width: "75px" }}
        />
        <Message>{user.first_name}</Message>
      </Stack>
      {user.first_name ? (
        <>
          {blogs.length ? (
            <>
              {blogs.map(
                ({
                  id,
                  title,
                  body,
                  date,
                  name,
                  tags,
                  image,
                  numOfComments,
                }) => {
                  return (
                    <BlogCard
                      key={uuidv4()}
                      id={id}
                      name={name}
                      date={date}
                      body={body}
                      title={title}
                      tags={tags}
                      image={image.replaceAll("\\", "/")}
                      numOfComments={numOfComments}
                    />
                  );
                }
              )}
            </>
          ) : (
            <Message>
              {`has no blogs at the moment `}
              <Link style={{ textDecoration: "none", color: "#009688" }} to="/">
                Home
              </Link>
            </Message>
          )}
        </>
      ) : (
        <Message>
          {`Sorry user not found `}
          <Link style={{ textDecoration: "none", color: "#009688" }} to="/">
            Home
          </Link>
        </Message>
      )}
    </PageContainer>
  );
}

export default ProfilePage;
