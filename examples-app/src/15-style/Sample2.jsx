import React from "react";
import styled from "styled-components";
// Button 컴포넌트
const Button = styled.button`
  color: grey;
  background: yellow;
  border: 2px solid green;
`;

// Button에 style이 추가된 RoundedButton 컴포넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function Sample2(props) {
  return (
    <div>
      <Button>Normal</Button>
      <RoundedButton>Rounded</RoundedButton>
    </div>
  );
}

export default Sample2;
