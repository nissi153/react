import React from "react";
import { useState } from "react";

function RequestForm(props) {
  const [value, setValue] = useState("요청사항을 입력하세요.");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("입력한 요청사항:" + value);
    //a 태그나 submit 태그는 고유의 동작이 있다. 페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 e.preventDefault 는 그 동작을 중단시킨다.
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        요청사항:
        <textarea value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default RequestForm;
