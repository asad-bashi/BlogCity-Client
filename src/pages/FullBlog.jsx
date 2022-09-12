import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Roses from "../images/roses.jpg";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
import { UserContext } from "../App";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBlog() {
      const { data } = await axios.get(`http://localhost:5000/api/blogs/${id}`);
      setBlog(data);
    }
    getBlog();
  }, [id]);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Wrapper>
      {blog ? (
        <>
          <Poster />
          <BLogInfo>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
            >
              <h1>{blog.title}</h1>
              {user.id === blog.user_id ? (
                <Stack spacing={1.5} direction="row">
                  <EditIcon
                    onClick={() => navigate(`/blogs/${id}/edit`)}
                    sx={{ fontSize: "30px", "&:hover": { cursor: "pointer" } }}
                  />
                  <DeleteOutlineIcon
                    onClick={handleDelete}
                    sx={{ fontSize: "30px", "&:hover": { cursor: "pointer" } }}
                  />
                </Stack>
              ) : (
                ""
              )}
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Stack spacing={3} direction="row">
                <span>{blog.name}</span>
                <span>{blog.date}</span>
              </Stack>
              <span>{blog.tags}</span>
            </Stack>
          </BLogInfo>
          <Divider />
          <Main>{blog.body}</Main>
        </>
      ) : (
        <h1>blog not found</h1>
      )}
    </Wrapper>
  );
}
export default FullBLog;
