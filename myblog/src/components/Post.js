import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchPostById } from "../services/apiService"; // API 서비스 함수 가져오기
import { useParams } from "react-router-dom"; // URL 파라미터를 가져오기 위해 사용

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const Main = styled.main`
  padding: 20px;
`;

const Article = styled.article`
  margin-top: 20px;
`;

const Post = () => {
  const { id } = useParams(); // URL에서 게시물 ID 가져오기
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Main>
        <h1>{post.title}</h1>
        <Article>{post.body}</Article>
      </Main>
    </Container>
  );
};

export default Post;
