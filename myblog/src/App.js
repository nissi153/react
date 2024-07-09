import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Post from "./components/Post";
import Header from "./components/Header";
import AllPosts from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("handleLogin called");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log("handleLogout called");
    setIsLoggedIn(false);
    document.cookie = "token=; Max-Age=0; path=/;"; // Clear the token
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin onLogin={handleLogin} />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/allPosts" element={<AllPosts />} />
        <Route path="/add" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
