import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchRecentPosts, deletePost } from "../services/apiService";

const Container = styled.div`
  width: 100%;
  padding: 20px;

  margin: 0 auto;
  max-width: 982px;
  background: #f8f9fa;
`;

const Main = styled.main`
  padding: 20px;
`;

const AdminTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;

const AdminPosts = styled.ul`
  list-style: none;
  padding: 0;
`;

const AdminPost = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const AdminPostControls = styled.div`
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #0056b3;
    }
  }
  .btn-delete {
    background: #dc3545;
    &:hover {
      background: #c82333;
    }
  }
`;

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchRecentPosts();
      setPosts(fetchedPosts);
    };
    getPosts();
  }, []);

  const handleDelete = async (postId) => {
    await deletePost(postId);
    setPosts(posts.filter((post) => post._id !== postId));
  };

  return (
    <Container>
      <Main>
        <AdminTitle>
          <h2>Posts</h2>
          <Button to="/add">+ 새 게시물</Button>
        </AdminTitle>
        <AdminPosts>
          {posts.map((post) => (
            <AdminPost key={post._id}>
              <Link to={`/post/${post._id}`}>{post.title}</Link>
              <AdminPostControls>
                <Link to={`/edit/${post._id}`} className="btn">
                  편집
                </Link>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleDelete(post._id);
                  }}
                >
                  <input
                    type="submit"
                    value="삭제"
                    className="btn-delete btn"
                  />
                </form>
              </AdminPostControls>
            </AdminPost>
          ))}
        </AdminPosts>
      </Main>
    </Container>
  );
};

export default AllPosts;
