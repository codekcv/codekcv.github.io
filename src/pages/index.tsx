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
import { isMobile } from 'react-device-detect';
import Particles from 'react-particles-js';

const App: React.FC = () => {
  const [active, setActive] = useState<string>('home');
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
    e.deltaY < 0 && handleDirection('left');
    e.deltaY > 0 && handleDirection('right');
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.key === 'ArrowLeft' && handleDirection('left');
    e.key === 'ArrowRight' && handleDirection('right');
  };

  const handleOnSwipe = (target: number) => {
    target === -1 && handleDirection('left');
    target === 1 && handleDirection('right');
  };

  const handleDirection = (direction: string) => {
    if (scrolling) return;
    console.log(1);
    direction === 'left' && active !== 'home' && handleScroll(-1);
    direction === 'right' && active !== 'contact' && handleScroll(1);
  };

  const handleScroll = (target: number) => {
    console.log(2);
    let index = sections.indexOf(active) + target;
    setActive(sections[index]);
    console.log('i:', index);
    refs[index].current.scrollIntoView({
      behavior: 'smooth',
    });
    setScrolling(true);
    setTimeout(() => setScrolling(false), isMobile ? 400 : 800);
  };

  const handleJump = (target: string) => {
    const index = sections.indexOf(target);
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
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: 'right',
                speed: 0.05,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'push',
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
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
  background: rgb(35, 35, 50);
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;
  /* width: 200vw; */

  .particles {
    position: absolute;
    left: 0;
    width: 500vw;
    height: 50vh;
    z-index: 5;
  }
`;

export default App;
