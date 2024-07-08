import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiService"; // 로그인 API 함수 가져오기

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

const Admin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      document.cookie = `token=${data.token};path=/`; // 토큰을 쿠키에 저장
      setError("");
      // 로그인 성공 시 리디렉션 등을 처리할 수 있습니다.
      onLogin();
      alert("로그인 성공!");
      navigate("/allPosts"); // 로그인 성공 후 /allPosts로 라우팅
    } catch (error) {
      setError(error.message);
      alert("로그인 실패!");
    }
  };

  return (
    <Container>
      <Main>
        <h3>로그인</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">
            <b>사용자 이름</b>
          </Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Label htmlFor="password">
            <b>비밀번호</b>
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <SubmitButton type="submit" value="로그인" className="btn">
            로그인
          </SubmitButton>
        </Form>
      </Main>
    </Container>
  );
};

export default Admin;
