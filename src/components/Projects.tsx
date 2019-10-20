import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Link } from 'gatsby';

interface Props {}

export const Projects: React.FC<Props> = () => {
  return (
    <Element name="projects">
      <Container id="projects">
        <h1>@Projects</h1>
        <Link to="/project">All Projects</Link>
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
`;
