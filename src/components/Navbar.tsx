import React from 'react';
import styled from 'styled-components';

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
  display: none;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 9;

  nav {
    position: relative;
    top: 30px;

    ul {
      display: flex;
      list-style: none;
      color: silver;
      font-size: 1.25rem;
      font-weight: 300;
      text-transform: uppercase;

      li {
        margin: 0 15px;
        cursor: pointer;

        :hover {
          color: white;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    display: block;

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 30px;
      left: 17.5px;

      ul {
        width: 100%;
        justify-content: center;
        list-style: none;
        color: silver;
        font-size: 1.25rem;
        font-weight: 300;
        text-transform: uppercase;

        li {
          /* margin: 0 20px; */
          cursor: pointer;
          transition: 0.5s ease;

          :hover {
            color: white;
            transform: translateY(-4px);
          }
        }
      }
    }
  }
`;
