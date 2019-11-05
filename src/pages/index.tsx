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
  const homeRef: any = useRef<HTMLDivElement>(null);
  const skillsRef: any = useRef<HTMLDivElement>(null);
  const projectsRef: any = useRef<HTMLDivElement>(null);
  const aboutRef: any = useRef<HTMLDivElement>(null);
  const contactRef: any = useRef<HTMLDivElement>(null);
  const refs = [homeRef, skillsRef, projectsRef, aboutRef, contactRef];
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
    const vw = isMobile ? window.innerWidth / 4 : window.innerWidth;
    const index = sections.indexOf(active) + target;

    setActive(sections[index]);
    scroll(window.pageXOffset, vw * target, SCROLL_DURATION);
    setScrolling(true);
    setTimeout(() => setScrolling(false), SCROLL_DURATION + 50);
  };

  const handleJump = (target: string) => {
    const index = sections.indexOf(target);
    refs[index].current.scrollIntoView();
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
        <div id="home" ref={homeRef}>
          <Home active={active} />
        </div>
        <div id="skills" ref={skillsRef}>
          <Skills active={active} />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects active={active} />
        </div>
        <div id="about" ref={aboutRef}>
          <About active={active} /> / 4
        </div>
        <div id="contact" ref={contactRef}>
          <Contact active={active} />
        </div>
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
