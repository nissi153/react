import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Clock from "./2-clock/Clock";
import Library from "./3-jsx/Library";
import Clock2 from "./4-element/Clock";
import CommentList from "./5-props/CommentList";
import Notification from "./6-state/Notification";
import NotificationList from "./6-state/NotificationList";
import Accommodate from "./7-hook/Accommodate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Accommodate />
  </>
);
