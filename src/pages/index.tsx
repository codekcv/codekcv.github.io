import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Events, scroller } from 'react-scroll';
import { Swipeable } from 'react-swipeable';
import { isMobile } from 'react-device-detect';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const indexRef = useRef<HTMLDivElement>(null);
  const sections: string[] = ['home', 'skills', 'projects', 'about', 'contact'];
  const [active, setActive] = useState<string>('home');

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) => {
    e.deltaY < 0 && handleDirection('up');
    e.deltaY > 0 && handleDirection('down');
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.key === 'ArrowUp' && handleDirection('up');
    e.key === 'ArrowDown' && handleDirection('down');
  };

  const handleOnSwipe = (target: number) => {
    target === -1 && handleDirection('up');
    target === 1 && handleDirection('down');
  };

  const handleDirection = (direction: string) => {
    if (scrolling) return;
    direction === 'up' && currentIndex > 0 && handleScroll('scroll', `-1`);
    direction === 'down' &&
      currentIndex < sections.length - 1 &&
      handleScroll('scroll', `1`);
  };

  const handleScroll = (type: string, target: string) => {
    let index = 0;

    switch (type) {
      case 'scroll':
        const val = currentIndex + parseInt(target);
        index = val;
        setCurrentIndex(val);
        break;
      case 'click':
        index = sections.indexOf(target);
        setCurrentIndex(index);
    }

    scroller.scrollTo(sections[index], {
      duration: type === 'scroll' ? 490 : 0,
      smooth: true,
      ignoreCancelEvents: true,
    });

    setScrolling(true);
    setTimeout(() => setScrolling(false), type === 'scroll' ? 500 : 0);
  };

  const [vh, setVh] = useState<number>(0);

  useEffect(() => {
    indexRef.current && indexRef.current.focus();

    Events.scrollEvent.register('begin', (to, el) => setActive(to));

    setVh(window.innerHeight * 0.01);

    return () => Events.scrollEvent.remove('end');
  }, []);

  return (
    <Swipeable
      onSwipedDown={() => handleOnSwipe(-1)}
      onSwipedUp={() => handleOnSwipe(1)}
    >
      <Container
        onWheel={handleOnWheel}
        onKeyDown={handleOnKeyDown}
        tabIndex={0}
        ref={indexRef}
        vh={vh}
      >
        <Navbar handleScroll={handleScroll} />
        <Home active={active} />
        <Skills active={active} vh={vh} />
        <Projects active={active} vh={vh} />
        <About active={active} />
        <Contact active={active} />
      </Container>
    </Swipeable>
  );
};

const Container = styled.main<{ vh: number }>`
  width: 100%;
  height: auto;

  :root {
    --vh: ${props => props.vh};
  }
`;

export default App;
