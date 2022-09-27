import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import axios from "axios";
import ShowCaseItem from "../components/ShowCaseItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { v4 as uuidv4 } from "uuid";
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
  const [blogsShowCase, setBlogsShowcase] = useState([]);

  useEffect(() => {
    async function getShowCaseBlogs() {
      const { data } = await axios.get("http://localhost:5000/api/blogs");
      setBlogsShowcase(data);
    }
    getShowCaseBlogs();
  }, []);

  return (
    <PageContainer>
      <ShowCase>
        <Swiper style={{ height: "100%" }}>
          {blogsShowCase.slice(0, 5).map(({ title, body, name, image, id }) => {
            return (
              <SwiperSlide
                key={uuidv4()}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShowCaseItem
                  id={id}
                  key={uuidv4()}
                  title={title}
                  body={body}
                  name={name}
                  image={image.replaceAll("\\", "/")}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ShowCase>
      <Categories setBlogs={setBlogs} />
      <BlogContainer>
        {blogs.map(
          ({ id, title, body, date, name, tags, image, numOfComments }) => {
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
      </BlogContainer>
    </PageContainer>
  );
}

export default Home;
