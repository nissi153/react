import React from "react";

const students = [
  {
    id: 1,
    name: "길동",
  },
  {
    id: 2,
    name: "사또",
  },
  {
    id: 3,
    name: "임당",
  },
  {
    id: 4,
    name: "순신",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={index}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
