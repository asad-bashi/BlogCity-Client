import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import { useState } from "react";
import Categories from "../components/Categories";
import lake from "../images/lake.jpg";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 5rem;
`;

const ShowCase = styled.div`
  height: 655px;
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
  padding: 1rem 0rem;
`;

function Home() {
  const [blogs, setBlogs] = useState([]);

  return (
    <PageContainer>
      <ShowCase />
      <Categories setBlogs={setBlogs} />
      <BlogContainer>
        {blogs.map(
          ({ id, title, body, date, name, tags, image, numOfComments }) => {
            return (
              <BlogCard
                key={id}
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
      </BlogContainer>
    </PageContainer>
  );
}

export default Home;
