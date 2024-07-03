import React from "react";

function Clock() {
  return <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>;
}

export default Clock;
