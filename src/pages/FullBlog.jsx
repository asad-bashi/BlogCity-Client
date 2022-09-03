import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Roses from "../images/roses.jpg";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 0 auto;
  row-gap: 0.75rem;
`;

const Poster = styled.div`
  background-image: url(${Roses});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
`;

const BLogInfo = styled.div`
  padding: 0.75rem 1.4rem;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 0.75rem 1.4rem;
`;

function FullBLog() {
  const { id } = useParams();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    async function getBlog() {
      const { data } = await axios.get(`http://localhost:5000/api/blogs/${id}`);
      setBlog(data);
    }
    getBlog();
  }, [id]);

  return (
    <Wrapper>
      <Poster />
      <BLogInfo>
        <h1>{blog.title}</h1>
        <Stack justifyContent="space-between" direction="row">
          <Stack spacing={3} direction="row">
            <span>{blog.name}</span>
            <span>{blog.date}</span>
          </Stack>
          <span>Tags</span>
        </Stack>
      </BLogInfo>
      <Divider />
      <Main>{blog.body}</Main>
    </Wrapper>
  );
}
export default FullBLog;
