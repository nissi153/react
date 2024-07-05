import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // 로컬 스토리지에 저장
    const newPost = {
      id: Date.now(), // 임의의 고유 ID 생성
      title,
      content,
      comments: [], // 빈 댓글 배열 초기화
    };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    existingPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    // 홈 페이지로 이동
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextInput
          height={180}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button title="글 작성하기" onClick={handleSubmit} />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
