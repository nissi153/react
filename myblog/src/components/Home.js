// Home.jsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import heroImage from "../img/top-hero.jpg";
import { fetchRecentPosts } from "../services/apiService";

const Main = styled.main`
  padding: 20px;
`;

const TopSection = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2em;
`;

const BodyText = styled.p`
  font-size: 1.2em;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 840px;
  height: auto;
  display: block;
  margin: 20px auto;
`;

const ArticlesSection = styled.section`
  margin-top: 40px;
`;

const ArticlesHeading = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
`;

const ArticleList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ArticleItem = styled.li`
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: #007bff;
    display: flex;
    justify-content: space-between;
  }
`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await fetchRecentPosts();
      //console.log("postData:" + postsData);
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      // 에러 처리
    }
  };

  return (
    <Main>
      <TopSection>
        <Heading>하루하루 스터디</Heading>
        <BodyText>매일 1시간씩 공부한 내용을 기록하고 있습니다.</BodyText>
      </TopSection>
      <HeroImage src={heroImage} alt="노트에 기록하는 모습" />
      <ArticlesSection>
        <ArticlesHeading>최근 게시물</ArticlesHeading>
        <ArticleList>
          {posts.map((post) => (
            <ArticleItem key={post._id}>
              <a href={`/post/${post._id}`}>
                <span>{post.title}</span>
                <span className="article-list-date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </a>
            </ArticleItem>
          ))}
        </ArticleList>
      </ArticlesSection>
    </Main>
  );
};

export default Home;
