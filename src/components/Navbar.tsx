import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  handleJump: (target: string) => void;
  active: string;
  vw: number;
  vh: number;
}

export const Navbar: React.FC<Props> = ({ handleJump, active, vw, vh }) => {
  const menu = ['Home', 'Skills', 'Projects', 'About', 'Contact'];

  return (
    <Container vw={vw} vh={vh}>
      <nav>
        <ul>
          {menu.map(item => (
            <Section
              key={item}
              onClick={() => handleJump(item)}
              active={item === active}
            >
              {item}
            </Section>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

interface ContainerProps {
  vw: number;
  vh: number;
}

const Container = styled.div<ContainerProps>`
  display: block;
  position: fixed;
  left: ${props => props.vw / 2 + 'px'};
  top: ${props => props.vh * 0.9 - 56 + 'px'};
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
      font-size: 0.9rem;
      font-weight: 300;
      text-transform: uppercase;
    }
  }

  @media only screen and (min-width: 768px) {
    left: ${props => props.vw / 2 + 'px'};
    top: 20px;

    nav {
      left: 17.5px;

      ul {
        font-size: 1.25rem;
      }
    }
  }
`;

const Section = styled.li<{ active: boolean }>`
  margin: 0 3px;
  padding: 5px;
  border-radius: 4px;
  transition: 0.5s ease;
  transform: ${props => (props.active ? 'translateY(-3px)' : 0)};
  cursor: ${props => (props.active ? 'default' : 'pointer')};

  :hover {
    color: ${props => !props.active && 'black'};
    transform: ${props => !props.active && 'translateY(-5%) scale(1.1)'};
  }

  ::after {
    content: '';
    background: dimgray;
    position: relative;
    display: block;
    width: ${props => (props.active ? '100%' : '0%')};
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.5s ease;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 15px;
  }
`;
