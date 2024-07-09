import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 982px;
  background: #f8f9fa;
`;

const About = () => (
  <Div>
    <h1>About</h1>
    <p>This is the about page.</p>
  </Div>
);

export default About;
