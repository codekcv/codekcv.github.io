import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Home } from '../sections/Home';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Swipeable } from 'react-swipeable';
import { scroll } from '../components/scroll';
import { isMobile } from 'react-device-detect';
import { SCROLL_DURATION } from '../components/constants';

const App: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [scrolling, setScrolling] = useState<boolean>(false);
  const indexRef = useRef<HTMLDivElement>(null);
  const sections: string[] = ['home', 'skills', 'projects', 'about', 'contact'];

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) => {
    e.deltaY < 0 && handleDirection('left');
    e.deltaY > 0 && handleDirection('right');
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
    e.key === 'ArrowLeft' && handleDirection('left');
    e.key === 'ArrowRight' && handleDirection('right');
  };

  const handleOnSwipe = (target: number) => {
    target === -1 && handleDirection('left');
    target === 1 && handleDirection('right');
  };

  const handleDirection = (direction: string) => {
    if (scrolling) return;
    direction === 'left' && active !== 'home' && handleScroll(-1);
    direction === 'right' && active !== 'contact' && handleScroll(1);
  };

  const handleScroll = (target: number) => {
    const vw = window.innerWidth / (isMobile ? 4 : 1);
    const index = sections.indexOf(active) + target;
    const pos = vw * index - window.pageXOffset;

    setActive(sections[index]);
    scroll(window.pageXOffset, pos, SCROLL_DURATION);
    setScrolling(true);
    setTimeout(() => setScrolling(false), SCROLL_DURATION + 50);
  };

  const handleJump = (target: string) => {
    const vw = window.innerWidth / (isMobile ? 4 : 1);
    const index = sections.indexOf(target);
    window.scrollTo(vw * index, 0);
    setActive(sections[index]);
  };

  useEffect(() => {
    indexRef.current && indexRef.current.focus();
  }, []);

  return (
    <Swipeable
      onSwipedRight={() => handleOnSwipe(-1)}
      onSwipedLeft={() => handleOnSwipe(1)}
    >
      <Navbar handleJump={handleJump} />
      <Container
        onWheel={handleOnWheel}
        onKeyDown={handleOnKeyDown}
        tabIndex={0}
        ref={indexRef}
      >
        <Home active={active} />
        <Skills active={active} />
        <Projects active={active} />
        <About active={active} />
        <Contact active={active} />
      </Container>
    </Swipeable>
  );
};

const Container = styled.main`
  background: white;
  display: flex;
  width: 800vw;
  height: 100vh;
  overflow: hidden;
`;

export default App;
