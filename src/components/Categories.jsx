import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
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
  user-select: none;
  font-weight: 300;
  padding: 6px 15px;
  border-radius: 100px;
  border: 2px solid red;
  color: #424242;
  border: 1px solid #9e9e9e;
  transition: 100ms ease-in;
  &:hover {
    background-color: #009688;
    color: white;
    cursor: pointer;
  }
`;

function Categories() {
  const TagList = [
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
  return (
    <Wrapper>
      {TagList.map((tag) => (
        <Tag key={uuidv4()}>{tag}</Tag>
      ))}
    </Wrapper>
  );
}

export default Categories;
