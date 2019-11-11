import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import '../sections/index.css';
import styled from 'styled-components';
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
  const [active, setActive] = useState<string>(sections[0]);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [swipeDone, setSwipeDone] = useState<boolean>(true);
  const [snap, setSnap] = useState<boolean>(false);
  const [swipeX1, setSwipeX1] = useState<number>(0);
  const [swipeX2, setSwipeX2] = useState<number>(0);
  const [measures, setMeasures] = useState<any>({ vw: 0 });
  const homeRef = useRef<React.FunctionComponent>(null);
  const skillsRef = useRef<React.FunctionComponent>(null);
  const projectsRef = useRef<React.FunctionComponent>(null);
  const aboutRef = useRef<React.FunctionComponent>(null);
  const contactRef = useRef<React.FunctionComponent>(null);
  const viewport: any = useRef(null);

  useEffect(() => {
    window.addEventListener('touchmove', e => e.preventDefault(), {
      passive: false,
    });

    return () => {
      window.removeEventListener('touchmove', e => e.preventDefault());
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      const vw = viewport.current.getBoundingClientRect().width;
      const vh = viewport.current.getBoundingClientRect().height;
      const isMobile = vw < 768;
      const SCROLL_DURATION = isMobile ? 250 : 500;
      const ANIMATION_DELAY = isMobile ? 250 : 150;

      setMeasures({ vw, vh, isMobile, SCROLL_DURATION, ANIMATION_DELAY });
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
        e.preventDefault();
        setSwipeX1(e.touches[0].clientX);
        setSwipeX2(e.touches[0].clientX);
        swipeDone && setSwipeDone(false);
        break;
      case 'move':
        e.preventDefault();
        const x = e.touches[0].clientX;

        if (Math.abs(swipeX1 - x) >= 60 && !swipeDone) {
          swipeX1 < swipeX2 ? handleScroll('left') : handleScroll('right');
          setSwipeDone(true);
        } else {
          setSwipeX2(x);
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
      const pos = measures.vw * index - window.pageXOffset;

      setScrolling(true);
      setActive(sections[index]);
      setTimeout(() => setScrolling(false), measures.SCROLL_DURATION + 50);

      let val = 0;
      const tick = 1000 / 60;
      const base = window.pageXOffset;
      const ease = !measures.isMobile
        ? (t: number, b: number, c: number) => {
            t /= measures.SCROLL_DURATION / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          }
        : (t: number, b: number, c: number) =>
            (c * t) / measures.SCROLL_DURATION + b;

      const myInterval = setInterval(() => {
        if ((val += tick) < measures.SCROLL_DURATION) {
          window.scrollTo(ease(val, base, pos), 0);
        } else {
          window.scrollTo(base + pos, 0);
          clearInterval(myInterval);
        }
      }, tick);
    }
  };

  const handleJump = (target: string) => {
    const index = sections.indexOf(target);
    window.scrollTo(measures.vw * index, 0);
    setActive(sections[index]);
  };

  if (measures.vw === 0) return <Viewport ref={viewport} />;

  return (
    <>
      <SEO section={active} />
      <Navbar
        menu={sections}
        measures={measures}
        handleJump={handleJump}
        active={active}
      />
      <Container
        className="content-container"
        onWheel={handleOnWheel}
        onTouchStart={e => handleSwipe('start', e)}
        onTouchMove={e => handleSwipe('move', e)}
        onTouchEnd={e => handleSwipe('end', e)}
      >
        <Home homeRef={homeRef} measures={measures} />
        <Skills
          skillsRef={skillsRef}
          measures={measures}
          active={active}
          snap={snap}
        />
        <Projects
          projectsRef={projectsRef}
          measures={measures}
          active={active}
          snap={snap}
        />
        <About
          aboutRef={aboutRef}
          measures={measures}
          active={active}
          snap={snap}
        />
        <Contact contactRef={contactRef} measures={measures} active={active} />
        <FlyingText
          sections={sections}
          active={active}
          scrolling={scrolling ? 1 : 0}
          measures={measures}
          refs={[homeRef, skillsRef, projectsRef, aboutRef, contactRef]}
          setSnap={setSnap}
        />
      </Container>
      <Viewport ref={viewport} />
    </>
  );
};

const Container = styled.main`
  background: white;
  display: flex;
  width: 800vw;
  height: 100vh;
`;

const Viewport = styled.main`
  width: 100vw;
  height: 100vh;
`;

export default App;
