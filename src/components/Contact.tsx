import React from 'react';
import styled from 'styled-components';
import { Section } from '../pages';
import { Element } from 'react-scroll';

interface Props {}

export const Contact: React.FC<Props> = () => {
  return (
    <Element name="contact">
      <Section id="contact">
        <Container>
          <h1>@Contact</h1>
        </Container>
      </Section>
    </Element>
  );
};

const Container = styled.div`
  background: lightcoral;
`;
