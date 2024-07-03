import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="기초공부 파이썬" numOfPage={300} />
      <Book name="기초공부 AWS" numOfPage={400} />
      <Book name="기초공부 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;
