import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import '../sections/index.css';
import styled from 'styled-components';
import { scroll } from '../components/scroll';
import { SCROLL_DURATION, SWIPE_THRESHOLD } from '../components/constants';
import { Navbar } from '../components/Navbar';
import { Home } from '../sections/Home';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { FlyingText } from '../components/FlyingText';
import { SEO } from '../components/SEO';
import { isIOS } from 'react-device-detect';
import disableScroll from 'disable-scroll';

const App: React.FC = () => {
  const sections: string[] = ['Home', 'Skills', 'Projects', 'About', 'Contact'];
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [active, setActive] = useState<string>(sections[0]);
  const [swipeDone, setSwipeDone] = useState<boolean>(true);
  const [swipeX1, setSwipeX1] = useState();
  const [swipeX2, setSwipeX2] = useState();
  const [vw, setVw] = useState<number>(0);
  const [vh, setVh] = useState<number>(0);
  const viewport: any = useRef(null);

  useEffect(() => {
    isIOS && disableScroll.on();
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setVw(viewport.current.getBoundingClientRect().width / 8);
      setVh(viewport.current.getBoundingClientRect().height);
    };

    handleResize();
    window.scrollTo(0, 0);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) => {
    e.deltaY < 0 && handleScroll('left');
    e.deltaY > 0 && handleScroll('right');
  };

  const handleSwipe = (type: string, e: React.TouchEvent<HTMLElement>) => {
    switch (type) {
      case 'start':
        setSwipeX1(e.touches[0].clientX);
        setSwipeX2(e.touches[0].clientX);
        swipeDone && setSwipeDone(false);
        break;
      case 'move':
        setSwipeX2(e.touches[0].clientX);

        if (Math.abs(swipeX1 - swipeX2) >= SWIPE_THRESHOLD && !swipeDone) {
          swipeX1 < swipeX2 ? handleScroll('left') : handleScroll('right');
          setSwipeDone(true);
        }
        break;
      case 'end':
        swipeX1 !== swipeX2 &&
          !swipeDone &&
          (swipeX1 < swipeX2 ? handleScroll('left') : handleScroll('right'));
    }
  };

  const handleScroll = (dir: string | number) => {
    if (scrolling) return;
    dir === 'left' && active !== sections[0] && (dir = -1);
    dir === 'right' && active !== sections.slice(-1)[0] && (dir = 1);

    if (typeof dir === 'number') {
      const index = sections.indexOf(active) + dir;
      const pos = vw * index - window.pageXOffset;

      if (!isIOS) {
        scroll(window.pageXOffset, pos, SCROLL_DURATION);
        setScrolling(true);

        setTimeout(() => setActive(sections[index]));
        setTimeout(() => setScrolling(false), SCROLL_DURATION + 50);
      }
    }
  };

  const handleJump = (target: string) => {
    const jump = () => {
      const index = sections.indexOf(target);
      window.scrollTo(vw * index, 0);
      setActive(sections[index]);
    };

    if (!isIOS) {
      jump();
    } else {
      disableScroll.off();
      setTimeout(() => {
        jump();
        setTimeout(() => disableScroll.on(), 0);
      }, 0);
    }
  };

  const homeRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const [snap, setSnap] = useState<boolean>(false);

  return (
    <>
      <SEO section={active} />
      <Navbar handleJump={handleJump} active={active} vw={vw} vh={vh} />
      <Container
        className="content-container"
        ref={viewport}
        onWheel={handleOnWheel}
        onTouchStart={e => handleSwipe('start', e)}
        onTouchMove={e => handleSwipe('move', e)}
        onTouchEnd={e => handleSwipe('end', e)}
      >
        <Home active={active} homeRef={homeRef} />
        <Skills active={active} skillsRef={skillsRef} snap={snap} />
        <Projects active={active} projectsRef={projectsRef} snap={snap} />
        <About active={active} aboutRef={aboutRef} vh={vh} snap={snap} />
        <Contact active={active} contactRef={contactRef} />
        <FlyingText
          sections={sections}
          active={active}
          scrolling={scrolling ? 1 : 0}
          vw={vw}
          vh={vh}
          refs={[homeRef, skillsRef, projectsRef, aboutRef, contactRef]}
          setSnap={setSnap}
        />
      </Container>
    </>
  );
};

const Container = styled.main`
  background: white;
  display: flex;
  width: 800vw;
  height: 100vh;
`;

export default App;
