import React, { useState, useRef, useEffect } from 'react';
import '../sections/index.css';
import styled from 'styled-components';
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
import { SEO } from '../components/SEO';

const App: React.FC = () => {
  const sections: string[] = ['Home', 'Skills', 'Projects', 'About', 'Contact'];
  const [active, setActive] = useState<string>('Home');
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [place, setPlace] = useState<number[]>([]);
  const viewport: any = useRef(null);
  const [vw, setVw] = useState<number>(0);
  const [vh, setVh] = useState<number>(0);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return (() => window.removeEventListener('resize', handleResize))();
  }, []);

  const handleResize = () => {
    setVw(viewport.current.getBoundingClientRect().width);
    setVh(viewport.current.getBoundingClientRect().height);
  };

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) => {
    e.deltaY < 0 && handleScroll('left');
    e.deltaY > 0 && handleScroll('right');
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.key === 'ArrowLeft' && handleScroll('left');
    e.key === 'ArrowRight' && handleScroll('right');
  };

  const handleOnSwipe = (target: number) => {
    target === -1 && handleScroll('left');
    target === 1 && handleScroll('right');
  };

  const handleScroll = (direction: string | number) => {
    if (scrolling) return;

    direction === 'left' && active !== sections[0] && (direction = -1);
    direction === 'right' &&
      active !== sections.slice(-1)[0] &&
      (direction = 1);

    if (typeof direction === 'number') {
      const index = sections.indexOf(active) + direction;
      const pos = vw * index - window.pageXOffset;

      scroll(window.pageXOffset, pos, SCROLL_DURATION);
      setScrolling(true);

      setTimeout(() => {
        setActive(sections[index]);
        setTimeout(() => setScrolling(false), SCROLL_DURATION + 50);
      }, 0);
    }
  };

  const handleJump = (target: string) => {
    const index = sections.indexOf(target);
    window.scrollTo(vw * index, 0);
    setActive(sections[index]);
  };

  const addPlace = (index: number, posY: number) => {
    if (place.length <= index) {
      setPlace(place => [...place, posY]);
    } else {
      setPlace(place => {
        const arr = [...place];
        arr.splice(index, 1, posY);
        return arr;
      });
    }
  };

  const handleOnTouch = (e: React.TouchEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Swipeable
      onSwipedRight={() => handleOnSwipe(-1)}
      onSwipedLeft={() => handleOnSwipe(1)}
    >
      <SEO section={active} />
      <Navbar handleJump={handleJump} active={active} vw={vw} vh={vh} />
      <Container
        onWheel={handleOnWheel}
        onKeyDown={handleOnKeyDown}
        onTouchStart={handleOnTouch}
        tabIndex={0}
      >
        <Home active={active} addPlace={addPlace} />
        <Skills active={active} addPlace={addPlace} vh={vh} />
        <Projects active={active} addPlace={addPlace} vh={vh} />
        <About active={active} addPlace={addPlace} />
        <Contact active={active} addPlace={addPlace} />
        <FlyingText
          sections={sections}
          active={active}
          place={place}
          scrolling={scrolling ? 1 : 0}
          vw={vw}
        />
        <Viewport ref={viewport} />
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

const Viewport = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0;
`;

export default App;
