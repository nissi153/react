import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createPost } from "../services/apiService"; // Import the API service

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const Main = styled.main`
  padding: 20px;
`;

const AdminTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, body });
      navigate("/allPosts");
    } catch (error) {
      console.error("Failed to create post:", error.message);
    }
  };

  return (
    <Container>
      <Main>
        <BackLink href="/allPosts">&larr; 뒤로</BackLink>
        <AdminTitle>
          <h2>게시물 작성</h2>
        </AdminTitle>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="title">제목</Label>
          <Input
            type="text"
            placeholder="게시물 제목"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label htmlFor="body">내용</Label>
          <TextArea
            placeholder="게시물 내용"
            name="body"
            id="body"
            cols="50"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <SubmitButton type="submit">등록</SubmitButton>
        </Form>
      </Main>
    </Container>
  );
};

export default CreatePost;
