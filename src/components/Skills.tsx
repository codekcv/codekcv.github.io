import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {}

export const Skills: React.FC<Props> = () => {
  return (
    <Element name="skills">
      <Container id="skills">
        <h1>@Skills</h1>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: mediumorchid;
  width: 100%;
  height: 100vh;
`;
