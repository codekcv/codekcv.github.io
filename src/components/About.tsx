import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <Element name="about">
      <Container id="about">
        <h1>@About</h1>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightcoral;
  width: 100%;
  min-height: 100vh;
`;
