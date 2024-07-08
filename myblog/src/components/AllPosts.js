import React from "react";
import { Link } from "react-router-dom";

const AllPosts = () => {
  return (
    <div className="container">
      {/* Main Content */}
      <main className="main">
        {/* Admin Title */}
        <div className="admin-title">
          <h2>Posts</h2>
          <Link to="/add" className="button">
            + 새 게시물
          </Link>
        </div>

        {/* List of Posts */}
        <ul className="admin-posts">
          <li>
            <Link to="/post/665949eab746739d0804eb95">제목 1</Link>
            <div className="admin-post-controls">
              <Link to="/edit/665949eab746739d0804eb95" className="btn">
                편집
              </Link>
              <form
                action="/delete/665949eab746739d0804eb95?_method=DELETE"
                method="POST"
              >
                <input type="submit" value="삭제" className="btn-delete btn" />
              </form>
            </div>
          </li>
          <li>
            <Link to="/post/665949eab746739d0804eb96">제목 2</Link>
            <div className="admin-post-controls">
              <Link to="/edit/665949eab746739d0804eb96" className="btn">
                편집
              </Link>
              <form
                action="/delete/665949eab746739d0804eb96?_method=DELETE"
                method="POST"
              >
                <input type="submit" value="삭제" className="btn-delete btn" />
              </form>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default AllPosts;
