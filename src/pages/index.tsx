import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { Swipeable } from 'react-swipeable';
import { scroll } from '../components/scroll';
import { SCROLL_DURATION } from '../components/constants';
import { Navbar } from '../components/Navbar';
import { Home } from '../sections/Home';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { FlyingText } from '../components/FlyingText';

const App: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [scrolling, setScrolling] = useState<boolean>(false);
  const indexRef = useRef<HTMLDivElement>(null);
  const sections: string[] = ['home', 'skills', 'projects', 'about', 'contact'];

  useEffect(() => {
    indexRef.current && indexRef.current.focus();
  }, []);

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) => {
    e.deltaY < 0 && handleScroll('left');
    e.deltaY > 0 && handleScroll('right');
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
    e.key === 'ArrowLeft' && handleScroll('left');
    e.key === 'ArrowRight' && handleScroll('right');
  };

  const handleOnSwipe = (target: number) => {
    target === -1 && handleScroll('left');
    target === 1 && handleScroll('right');
  };

  const handleScroll = (direction: string | number) => {
    if (scrolling) return;

    direction === 'left' && active !== 'home' && (direction = -1);
    direction === 'right' && active !== 'contact' && (direction = 1);

    if (typeof direction === 'number') {
      const vw = window.innerWidth / (isMobile ? 4 : 1);
      const index = sections.indexOf(active) + direction;
      const pos = vw * index - window.pageXOffset;

      setActive(sections[index]);
      scroll(window.pageXOffset, pos, SCROLL_DURATION);
      setScrolling(true);
      setTimeout(() => setScrolling(false), SCROLL_DURATION + 50);
    }
  };

  const handleJump = (target: string) => {
    const vw = window.innerWidth / (isMobile ? 4 : 1);
    const index = sections.indexOf(target);
    window.scrollTo(vw * index, 0);
    setActive(sections[index]);
  };

  const [place, setPlace] = useState<number[]>([]);

  const addPlace = (posY: number) => setPlace(place => [...place, posY]);
  const showTop = () => console.log(place);

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
        onClick={showTop}
      >
        <Home active={active} addPlace={addPlace} />
        <Skills active={active} addPlace={addPlace} />
        <Projects active={active} addPlace={addPlace} />
        <About active={active} addPlace={addPlace} />
        <Contact active={active} addPlace={addPlace} />
        <FlyingText sections={sections} active={active} place={place} />
      </Container>
    </Swipeable>
  );
};

const Container = styled.main`
  background: white;
  display: flex;
  width: 800vw;
  height: 100%;
`;

export default App;
