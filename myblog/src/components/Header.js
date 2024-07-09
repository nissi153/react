import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 982px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f8f9fa;
`;

const Logo = styled(Link)`
  font-size: 1.5em;
  text-decoration: none;
  color: #333;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    color: #333;
  }
`;

const AdminLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const Header = ({ isLoggedIn, handleLogout }) => (
  <HeaderContainer>
    <Logo to="/">나의 블로그</Logo>
    <Nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Nav>
    {isLoggedIn ? (
      <AdminLink to="#" onClick={handleLogout}>
        로그아웃
      </AdminLink>
    ) : (
      <AdminLink to="/admin">관리자 로그인</AdminLink>
    )}
  </HeaderContainer>
);

export default Header;
