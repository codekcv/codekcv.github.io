import React from 'react';
import styled from 'styled-components';

interface Props {
  handleJump: (target: string) => void;
}

export const Navbar: React.FC<Props> = ({ handleJump }) => {
  const menu = ['home', 'skills', 'projects', 'about', 'contact'];

  return (
    <Container>
      <nav>
        <ul>
          {menu.map(item => (
            <li key={item} onClick={() => handleJump(item)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  position: fixed;
  left: calc(50% / 4);
  top: calc(90% / 4);
  transform: translate(-50%, -50%);
  z-index: 5;

  nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30px;
    left: 0;

    ul {
      display: flex;
      list-style: none;
      color: dimgray;
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;

      li {
        margin: 0 7px;
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

  @media only screen and (min-width: 768px) {
    left: 50%;
    top: 20px;

    nav {
      left: 17.5px;

      ul {
        font-size: 1.25rem;

        li {
          margin: 0 15px;
        }
      }
    }
  }
`;
