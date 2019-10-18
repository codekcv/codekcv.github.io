import React from 'react';
import styled from 'styled-components';

interface Props {
  handleScroll: (type: string, target: string) => void;
}

export const Navbar: React.FC<Props> = ({ handleScroll }) => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <div onClick={() => handleScroll('click', 'home')}>Home</div>
          </li>
          <li>
            <div onClick={() => handleScroll('click', 'skills')}>Skills</div>
          </li>
          <li>
            <div onClick={() => handleScroll('click', 'projects')}>
              Projects
            </div>
          </li>
          <li>
            <div onClick={() => handleScroll('click', 'about')}>About</div>
          </li>
          <li>
            <div onClick={() => handleScroll('click', 'contact')}>Contact</div>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;

  nav {
    position: relative;
    display: flex;
    justify-content: flex-end;
    top: 30px;
    right: 10px;

    ul {
      display: flex;
      list-style: none;
      color: gainsboro;
      font-size: 1.25rem;
      font-weight: 300;
      text-transform: uppercase;

      li {
        margin: 0 20px;
      }
    }
  }
`;
