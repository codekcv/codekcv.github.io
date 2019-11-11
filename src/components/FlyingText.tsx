import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  sections: string[];
  active: string;
  scrolling: number;
  measures: any;
  refs: React.MutableRefObject<any>[];
  setSnap: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FlyingText: React.FC<Props> = ({
  sections,
  active,
  scrolling,
  measures,
  refs,
  setSnap,
}) => {
  const [text1, setText1] = useState<string>('Christian Villamin');
  const [text2, setText2] = useState<string>('');
  const [posX, setPosX] = useState<number>(measures.vw / 2);
  const [posY, setPosY] = useState<number>(-100);
  const [anim, setAnim] = useState<boolean>(false);
  const [sizes, setSizes] = useState<number[]>([measures.isMobile ? 8 : 3.5]);

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
    let newY = activeRef.current.getBoundingClientRect().top - 18;

    if (measures.isMobile && activeRef.current) {
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
    setPosX(measures.vw * index + measures.vw / 2);

    if (measures.isMobile) {
      setSizes([7, 7, 8.5, 8.5, 6.5]);
    } else {
      setSizes([3, 6.5, 6, 6, 5]);
    }
    console.log('omg');
  }, [measures.vw]);

  useEffect(() => {
    setPosX(measures.vw * index + measures.vw / 2);
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
      isMobile={measures.isMobile}
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
  isMobile: boolean;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  width: 100%;
  top: ${props => props.posY + 'px'};
  left: ${props => props.posX + 'px'};
  transform: translate(-50%, -50%);
  transition: ${props =>
    props.scrolling
      ? props.isMobile
        ? '0.2s linear'
        : '0.35s ease-in-out'
      : 0};

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
    h1 {
      text-shadow: 0 6.5px silver;
    }
  }
`;
