import styled from "styled-components";

import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #eeeeee;
`;

const BlogContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function getBlogs() {
      const { data } = await axios.get("http://localhost:5000/api/blogs/");
      setBlogs(data);
    }
    getBlogs();
  }, []);

  return (
    <PageContainer>
      <BlogContainer>
        {blogs.map(({ id, title, body, date, name }) => {
          return (
            <BlogCard
              id={id}
              name={name}
              date={date}
              body={body}
              title={title}
            />
          );
        })}
      </BlogContainer>
    </PageContainer>
  );
}

export default Home;
