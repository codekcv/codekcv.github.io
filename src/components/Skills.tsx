import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {}

export const Skills: React.FC<Props> = () => {
  return (
    <Element name="skills">
      <Container id="skills">
        <div className="card front-end">
          <h1>Front-End Technologies</h1>
          <p>HTML5</p>
          <p>CSS3 / SASS</p>
          <p>JavaScript ES6+</p>
          <p>TypeScript</p>
          <p>ReactJS</p>
          <p>Redux</p>
        </div>
        <div className="card back-end">
          <h1>Back-End Technologies</h1>
          <p>NodeJS</p>
          <p>ExpressJS</p>
          <p>MongoDB</p>
          <p>PostgresSQL</p>
          <p>Postman</p>
        </div>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(32, 38, 51);
  width: 100%;
  min-height: 100vh;

  .card {
    background: white;
    width: 400px;
    height: 300px;
    padding: 1rem;
    margin: 0 1rem;
    box-shadow: 0 0 5px black;
  }

  @media screen and (min-width: 320px) {
    flex-direction: column;

    .card {
      background: white;
      width: 200px;
      height: 200px;
      padding: 1rem;
      margin: 0 1rem;
      box-shadow: 0 0 5px black;
    }
  }
`;
