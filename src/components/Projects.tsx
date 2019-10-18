import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';

interface Props {}

export const Projects: React.FC<Props> = () => {
  return (
    <Element name="projects">
      <Container id="projects">
        <Particles className="particles" />
        <h1>@Projects</h1>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
  width: 100%;
  min-height: 100vh;
  z-index: 1;

  .particles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
