import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = (id, event) => {
    console.log("id:" + id);
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button
      onClick={(event) => {
        console.log("event:" + event);
        handleConfirm(1, event);
      }}
      disabled={isConfirmed}
    >
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
