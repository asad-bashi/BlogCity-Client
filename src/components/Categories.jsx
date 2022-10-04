import { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export const TagList = [
  "All",
  "Commercial",
  "Design",
  "Nature",
  "People",
  "Photography",
  "Tech",
  "Travel",
  "Uncategorized",
];

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

const Tag = styled.span`
  background-color: white;
  user-select: none;
  font-weight: 300;
  padding: 6px 15px;
  border-radius: 100px;
  color: #424242;
  transition: 100ms ease-in;
  &:hover {
    background-color: #009688;
    color: white;
    cursor: pointer;
  }
`;

const SelectedTag = styled.span`
  background-color: #009688;
  color: white;
  user-select: none;
  font-weight: 300;
  padding: 6px 15px;
  border-radius: 100px;
  transition: 100ms ease-in;
  cursor: pointer;
`;

function Categories({ setBlogs }) {
  const [test, setTest] = useState({ category: "All", location: 0 });
  axios.defaults.withCredentials = true;

  useEffect(() => {
    async function getBlogs() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/category-blogs/${test.category}`
      );
      setBlogs(data);
    }
    getBlogs();
  }, [test]);

  return (
    <Wrapper>
      {TagList.map((tag, index) =>
        test.location === index ? (
          <SelectedTag
            key={uuidv4()}
            onClick={() => setTest({ category: tag, location: index })}
          >
            {tag}
          </SelectedTag>
        ) : (
          <Tag
            key={uuidv4()}
            onClick={() => setTest({ category: tag, location: index })}
          >
            {tag}
          </Tag>
        )
      )}
    </Wrapper>
  );
}

export default Categories;
