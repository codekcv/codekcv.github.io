import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {}

export const Projects: React.FC<Props> = () => {
  return (
    <Element name="projects">
      <Container id="projects">
        <h1>@Projects</h1>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
  width: 100%;
  height: 100vh;
`;
