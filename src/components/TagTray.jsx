import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "@mui/material";
import styled from "styled-components";
import { TagList } from "./Categories";
import { v4 as uuidv4 } from "uuid";

const Tray = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Item = styled.span`
  border-radius: 100px;
  font-weight: 300;
  font-size: 0.85rem;
  padding: 0.45rem 1.3rem;
  transition: 100ms ease-in;
  cursor: pointer;
  border: 1px solid #009688;
  user-select: none;
  &:hover {
    background-color: #4db6ac;
  }
`;

function TagTray({ tags, setTags }) {
  function handleClick(index) {
    const updatedTags = tags.map((tag, i) => {
      return i === index ? { ...tag, isSelected: !tag.isSelected } : tag;
    });
    setTags(updatedTags);
  }
  useEffect(() => {
    const list = TagList.slice(1);
    const tags = list.map((tag) => ({ isSelected: false, tag }));
    setTags(tags);
  }, []);

  return (
    <Tray>
      {tags.map(({ tag, isSelected }, index) => (
        <Item
          key={uuidv4()}
          style={{ backgroundColor: isSelected ? "#009688" : "" }}
          onClick={() => handleClick(index)}
        >
          {tag}
        </Item>
      ))}
    </Tray>
  );
}

export default TagTray;
