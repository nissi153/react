// services/apiService.js

const BASE_URL = "http://localhost:3001/api";

export const fetchRecentPosts = async () => {
  try {
    //const token = "your-jwt-token-here";
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const text = await response.text();
    console.log("Response text:", text);

    if (!response.ok) {
      throw new Error("서버에서 데이터를 가져오는 데 실패했습니다.");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching recent posts:", error.message);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("서버에서 데이터를 가져오는 데 실패했습니다.");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching post:", error.message);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("로그인에 실패했습니다.");
    }

    const data = await response.json();
    return data; // JWT 토큰 반환
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};
