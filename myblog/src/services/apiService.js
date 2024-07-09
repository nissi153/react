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

export const getPost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include credentials for authentication
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post.");
    }

    return await response.json();
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

export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to delete the post.");
    }
  } catch (error) {
    console.error("Error deleting post:", error.message);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include credentials for authentication
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Failed to create post.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error.message);
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include credentials for authentication
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Failed to update post.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post:", error.message);
    throw error;
  }
};
