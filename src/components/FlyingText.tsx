import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SCROLL_DURATION } from './constants';

interface Props {
  sections: string[];
  active: string;
}

export const FlyingText: React.FC<Props> = ({ sections, active }) => {
  const [text1, setText1] = useState('Christian Villamin');
  const [text2, setText2] = useState('');
  const [posX, setPosX] = useState(0);
  const [anim, setAnim] = useState(false);

  const posY = [600, 350, 150, 200, 200];

  const texts = [
    'Christian Villamin',
    'Technology Stack',
    'My Projects',
    'About Me',
    'Contact Me',
  ];

  const sizes = [60, 150, 120, 80, 100];
  const index = sections.indexOf(active);

  useEffect(() => {
    setPosX(window.innerWidth * index + window.innerWidth / 2);
    setAnim(anim => !anim);

    if (anim === false) {
      setText2(texts[index]);
    } else {
      setText1(texts[index]);
    }
  }, [active]);

  const x = window.scrollX;

  return (
    <Container
      index={index}
      posX={posX}
      posY={posY[index]}
      anim={anim}
      sizes={sizes}
    >
      <h1 id="current">{text1}</h1>
      <h1 id="next">{text2}</h1>
    </Container>
  );
};

interface ContainerProps {
  index: number;
  posX: number;
  posY: number;
  anim: boolean;
  sizes: number[];
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: ${props => props.posY + 'px'};
  left: ${props => props.posX + 'px'};
  transform: translate(-50%, -50%);
  transition: 0.35s ease-in-out;

  width: 100%;

  h1 {
    position: absolute;
    color: rgb(35, 35, 50);
    font-size: 100px;
    text-shadow: 0 6.5px silver;
    text-transform: uppercase;

    transition: ${props => (props.anim ? '0.5s' : '0.5s')} ease;
    /* transform: scale(1); */
    /* transform: ${props =>
      props.anim
        ? 'scale(' + props.size + ')'
        : 'scale(' + props.size + ')'}; */
/* 
      transform: ${props =>
        props.index == 1
          ? 'scale(' + props.sizes[props.index] + 'px)'
          : '50px'}; */


          font-size: ${props => props.sizes[props.index] + 'px'};
  }

  #current {
    opacity: ${props => (props.anim ? 0 : 1)};
    /* transform: ${props => 'scale(' + props.size + ')'}; */
  }

  #next {
    opacity: ${props => (props.anim ? 1 : 0)};
    /* transform: ${props => 'scale(' + props.size + ')'}; */
  }
`;
