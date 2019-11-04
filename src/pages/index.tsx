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
import { Scroll } from '../components/Scroll';

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
    let index = sections.indexOf(active) + target;
    setActive(sections[index]);
    // refs[index].current.scrollIntoView({
    //   behavior: 'smooth',
    // });

    Scroll(window.scrollX, vw * target, 500);

    setPosX(vw / 2 + index * vw);

    setScrolling(true);
    setTimeout(() => setScrolling(false), 600);
  };

  const handleJump = (target: string) => {
    const index = sections.indexOf(target);
    setActive(sections[index]);
    setPosX(vw / 2 + index * vw);

    refs[index].current.scrollIntoView();
  };

  useEffect(() => {
    indexRef.current && indexRef.current.focus();
    setVw(window.innerWidth);
    setPosX(window.innerWidth / 2);
  }, []);

  // Character
  const [posX, setPosX] = useState(0);
  const [vw, setVw] = useState(0);

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
        pos={posX}
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

        {/* <div id="character">
          <div id="screen">
            <h1 id="section">{active}</h1>
          </div>
        </div> */}
      </Container>
    </Swipeable>
  );
};

const Container = styled.main<{ pos: number }>`
  background: white;
  position: relative;
  display: flex;
  height: 100vh;
  width: 500vw;
  overflow: hidden;

  #character {
    position: absolute;
    background: white;
    /* border: 2px silver solid; */
    width: 75%;
    height: 250px;
    left: ${props => 'calc(' + props.pos + 'px)'};
    transform: translateX(-50%);
    top: 65px;
    transition: 1.25s ease;
    z-index: 0;

    border-radius: 10px;
    padding: 10px;

    box-shadow: 0 0 5px gray;

    #screen {
      width: 100%;
      height: 100%;
      background: seagreen;
      /* background: white; */
      box-shadow: inset 0 0 6px gainsboro;

      display: flex;
      justify-content: center;
      align-items: center;

      #section {
        /* color: rgba(35, 35, 50, 1); */
        color: white;
        font-size: 8vw;
        text-shadow: 0 6.5px silver;
      }
    }
  }
`;

export default App;
