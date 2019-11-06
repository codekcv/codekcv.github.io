import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

interface Props {
  sections: string[];
  active: string;
  place: number[];
}

export const FlyingText: React.FC<Props> = ({ sections, active, place }) => {
  const [text1, setText1] = useState<string>('Christian Villamin');
  const [text2, setText2] = useState<string>('');
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number[]>([]);
  const [anim, setAnim] = useState<boolean>(false);
  const [sizes, setSizes] = useState<number[]>([isMobile ? 8 : 3.5]);

  const texts = [
    'Christian Villamin',
    'Technology Stack',
    'My Projects',
    'About Me',
    'Contact Me',
  ];

  const index = sections.indexOf(active);

  useEffect(() => {
    const vw = window.innerWidth / (isMobile ? 4 : 1);
    setPosX(vw / 2);

    if (isMobile) {
      setSizes([8, 9, 10, 10, 10]);
    } else {
      setSizes([3.5, 6.5, 5, 7, 6.5]);
    }
  }, []);

  useEffect(() => {
    setPosY(place);
  }, [place]);

  useEffect(() => {
    const vw = window.innerWidth / (isMobile ? 4 : 1);

    setPosX(vw * index + vw / 2);
    setAnim(anim => !anim);

    anim ? setText1(texts[index]) : setText2(texts[index]);
  }, [active]);

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
  transform: ${props =>
    'translate(-50%, calc(-' + props.sizes[props.index] / 2 + 'vw ))'};
  transition: 0.35s ease-in-out;

  width: 100%;

  h1 {
    position: absolute;
    color: rgb(35, 35, 50);
    font-size: 100px;
    text-shadow: 0 3px silver;
    text-transform: uppercase;
    font-size: ${props => props.sizes[props.index] + 'vw'};
    transition: 0.5s ease;
  }

  #current {
    opacity: ${props => (props.anim ? 0 : 1)};
  }

  #next {
    opacity: ${props => (props.anim ? 1 : 0)};
  }

  @media only screen and (min-width: 768px) {
    transform: ${props =>
      'translate(-50%, calc(-' + props.sizes[props.index] / 2 + 'vw - 15px))'};

    h1 {
      text-shadow: 0 6.5px silver;
    }
  }
`;
