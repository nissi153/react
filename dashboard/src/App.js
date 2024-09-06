import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Accordion } from "react-bootstrap"; // 꼭 import를 해와야한다
import styled from "styled-components";
import Main from "./Main";

//리액트에 부트스트랩 사용하기
//1.bootstrap 관련 모듈 설치하기
//  npm install react-bootstrap bootstrap
//2. bootstrap.min.css import하기
//import 'bootstrap/dist/css/bootstrap.min.css';
//3. 컴포넌트 임포트해서 사용하기
//참조: https://react-bootstrap.netlify.app/docs/components/accordion
//4. styled-component와 bootstrap 함께 사용하기

const StyledButton = styled(Button)`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div className="AppBg">
      <Main />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "green" }}
      ></div>

      <Button
        style={{
          margin: 8,
          padding: 8,
          backgroundColor: "green",
        }}
        as="input"
        type="button"
        value="Button"
      />
      <StyledButton as="input" type="button" value="Button" />
      <Alert key="success" variant="success">
        This is a success alert—check it out!
      </Alert>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
