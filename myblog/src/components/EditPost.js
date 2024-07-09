import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPost, updatePost, deletePost } from "../services/apiService"; // 포스트 관련 API 함수 가져오기

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const Main = styled.main`
  padding: 20px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 600px;
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

const DeleteButton = styled(Button)`
  background: #dc3545;
  width: 200px;

  &:hover {
    background: #c82333;
  }
`;

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPost(id);
        setTitle(post.title);
        setBody(post.body);
      } catch (error) {
        alert("포스트를 불러오는 데 실패했습니다.");
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, { title, body });
      alert("포스트가 수정되었습니다.");
      navigate("/allPosts");
    } catch (error) {
      alert("포스트 수정에 실패했습니다.");
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(id);
      alert("포스트가 삭제되었습니다.");
      navigate("/allPosts");
    } catch (error) {
      alert("포스트 삭제에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Main>
        <h3>게시물 편집</h3>
        <Form onSubmit={handleUpdate}>
          <Label htmlFor="title">제목</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label htmlFor="body">내용</Label>
          <TextArea
            id="body"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <ButtonContainer>
            <Button type="submit">수정</Button>
            <DeleteButton type="button" onClick={handleDelete}>
              삭제
            </DeleteButton>
          </ButtonContainer>
        </Form>
      </Main>
    </Container>
  );
};

export default EditPost;
