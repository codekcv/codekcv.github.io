import React from 'react';
import styled from 'styled-components';

interface Props {
  blogRef: React.MutableRefObject<any>;
  measures: any;
  active: string;
}

export const Blog: React.FC<Props> = ({ blogRef, measures, active }) => {
  return (
    <Container>
      <div ref={blogRef} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
