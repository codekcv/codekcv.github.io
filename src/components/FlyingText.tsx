import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

interface Props {
  sections: string[];
  active: string;
  scrolling: number;
  vw: number;
  vh: number;
  refs: React.MutableRefObject<any>[];
  setSnap: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FlyingText: React.FC<Props> = ({
  sections,
  active,
  scrolling,
  vw,
  vh,
  refs,
  setSnap,
}) => {
  const [text1, setText1] = useState<string>('Christian Villamin');
  const [text2, setText2] = useState<string>('');
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number>(0);
  const [anim, setAnim] = useState<boolean>(false);
  const [sizes, setSizes] = useState<number[]>([isMobile ? 8 : 3.5]);

  const texts = [
    'Christian Villamin',
    'Technology Stack',
    'Things I Made',
    'Get To Know Me',
    'Send Me A Message',
  ];

  const index = sections.indexOf(active);

  useEffect(() => {
    const activeRef = refs[index];
    let newY = activeRef.current.getBoundingClientRect().top - 30;

    if (isMobile && activeRef.current) {
      if (newY < 30) {
        newY = 30;
        setSnap(true);
      } else {
        setSnap(false);
      }
    }

    setPosY(newY);
  }, [active]);

  useEffect(() => {
    setPosX(vw * index + vw / 2);

    if (isMobile) {
      setSizes([26, 9, 10, 10, 9]);
    } else {
      setSizes([70, 6.5, 5, 7, 5]);
    }
  }, [vw]);

  useEffect(() => {
    setPosX(vw * index + vw / 2);
    setAnim(anim => !anim);
    anim ? setText1(texts[index]) : setText2(texts[index]);
  }, [active]);

  return (
    <Container
      index={index}
      posX={posX}
      posY={posY}
      anim={anim ? 1 : 0}
      sizes={sizes}
      scrolling={scrolling}
      active={active === 'Home'}
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
  anim: number;
  sizes: number[];
  scrolling: number;
  active: boolean;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  top: ${props => props.posY + 'px'};
  left: ${props => props.posX + 'px'};
  transform: translate(-50%, -50%);
  transition: ${props =>
    props.scrolling ? (isMobile ? '0.25s linear' : '0.35s ease-in-out') : '0s'};

  h1 {
    position: absolute;
    color: rgb(35, 35, 50);
    font-size: 100px;
    text-shadow: 0 3px silver;
    text-transform: uppercase;
    font-size: ${props =>
      props.sizes[props.index] + (props.active ? 'px' : 'vw')};
    transition: 0.5s ease;
  }

  #current {
    opacity: ${props => (props.anim ? 0 : 1)};
  }

  #next {
    opacity: ${props => (props.anim ? 1 : 0)};
  }

  @media only screen and (min-width: 768px) {
    h1 {
      text-shadow: 0 6.5px silver;
    }
  }
`;
