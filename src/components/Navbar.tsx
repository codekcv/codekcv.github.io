import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

interface Props {
  handleJump: (target: string) => void;
}

export const Navbar: React.FC<Props> = ({ handleJump }) => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <div onClick={() => handleJump('home')}>Home</div>
          </li>
          <li>
            <div onClick={() => handleJump('skills')}>Skills</div>
          </li>
          <li>
            <div onClick={() => handleJump('projects')}>Projects</div>
          </li>
          <li>
            <div onClick={() => handleJump('about')}>About</div>
          </li>
          <li>
            <div onClick={() => handleJump('contact')}>Contact</div>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  display: ${!isMobile ? 'block' : 'none'};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 9;

  nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30px;
    left: 17.5px;

    ul {
      display: flex;
      list-style: none;
      color: dimgray;
      font-size: 1.25rem;
      font-weight: 300;
      text-transform: uppercase;

      li {
        margin: 0 15px;
        transition: 0.5s ease;
        cursor: pointer;

        :hover {
          color: black;
          transform: translateY(-3px);
        }
      }

      li::after {
        content: '';
        background: dimgray;
        position: relative;
        display: block;
        width: 0;
        height: 2px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.5s ease;
      }

      li:hover:after {
        width: 100%;
        transform: translate(-50%, 3px);
      }
    }
  }
`;
