import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import axios from "axios";
import lake from "../images/lake.jpg";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100vw;
  min-height: 100vh;
`;

const ShowCase = styled.div`
  height: 425px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${lake});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogContainer = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

function Home() {
  const [blogs, setBlogs] = useState([]);

  return (
    <PageContainer>
      <ShowCase />

      <Categories setBlogs={setBlogs} />
      <BlogContainer>
        {blogs.map(({ id, title, body, date, name, tags }) => {
          return (
            <BlogCard
              key={id}
              id={id}
              name={name}
              date={date}
              body={body}
              title={title}
              tags={tags}
            />
          );
        })}
      </BlogContainer>
    </PageContainer>
  );
}

export default Home;
