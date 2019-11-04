import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Swipeable } from 'react-swipeable';

const App: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const sections: string[] = ['home', 'skills', 'projects', 'about', 'contact'];

  // REFS
  const indexRef = useRef<HTMLDivElement>(null);
  const homeRef: any = useRef<HTMLDivElement>(null);
  const skillsRef: any = useRef<HTMLDivElement>(null);
  const projectsRef: any = useRef<HTMLDivElement>(null);
  const aboutRef: any = useRef<HTMLDivElement>(null);
  const contactRef: any = useRef<HTMLDivElement>(null);
  const refs = [homeRef, skillsRef, projectsRef, aboutRef, contactRef];

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
    direction === 'up' && currentIndex > 0 && handleScroll('scroll', -1);
    direction === 'down' &&
      currentIndex < sections.length - 1 &&
      handleScroll('scroll', 1);
  };

  const handleScroll = (type: string, target: number) => {
    let index = currentIndex + target;
    setCurrentIndex(index);
    setActive(sections[index]);

    refs[index].current.scrollIntoView({
      behavior: 'smooth',
    });

    setScrolling(true);
    setTimeout(() => setScrolling(false), type === 'scroll' ? 510 : 0);
  };

  const handleJump = (target: string) => {
    const index = sections.indexOf(target);
    setCurrentIndex(index);
    setActive(sections[index]);

    refs[index].current.scrollIntoView();
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
          <About active={active} />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact active={active} />
        </div>
      </Container>
    </Swipeable>
  );
};

const Container = styled.main`
  position: relative;
  display: flex;
  width: 500vw;
`;

export default App;
