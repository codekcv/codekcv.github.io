import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import '../sections/index.css';
import styled from 'styled-components';
import { scroll } from '../components/scroll';
import { Navbar } from '../components/Navbar';
import { Home } from '../sections/Home';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { FlyingText } from '../components/FlyingText';
import { SEO } from '../components/SEO';
import disableScroll from 'disable-scroll';

const App: React.FC = () => {
  const sections: string[] = ['Home', 'Skills', 'Projects', 'About', 'Contact'];
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [active, setActive] = useState<string>(sections[0]);
  const [swipeDone, setSwipeDone] = useState<boolean>(true);
  const [swipeX1, setSwipeX1] = useState();
  const [swipeX2, setSwipeX2] = useState();
  const [measures, setMeasures] = useState<any>({ vw: 0 });
  const [isIOS, setIsIOS] = useState(false);
  const homeRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const [snap, setSnap] = useState<boolean>(false);
  const viewport: any = useRef(null);

  useEffect(() => {
    // Disable iOS Devices Scroll
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      setIsIOS(true);
      disableScroll.on();
    }
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      const vw = viewport.current.getBoundingClientRect().width;
      const vh = viewport.current.getBoundingClientRect().height;
      const isMobile = viewport.current.getBoundingClientRect().width < 768;
      const SCROLL_DURATION = isMobile ? 250 : 500;
      const ANIMATION_DELAY = isMobile ? 250 : 150;
      const SWIPE_THRESHOLD = 40;

      setMeasures({
        vw,
        vh,
        isMobile,
        SCROLL_DURATION,
        ANIMATION_DELAY,
        SWIPE_THRESHOLD,
      });
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

        if (
          Math.abs(swipeX1 - swipeX2) >= measures.SWIPE_THRESHOLD &&
          !swipeDone
        ) {
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
      const pos = measures.vw * index - window.pageXOffset;

      if (!isIOS) {
        scroll(window.pageXOffset, pos, measures.SCROLL_DURATION);
        setScrolling(true);

        setTimeout(() => setActive(sections[index]));
        setTimeout(() => setScrolling(false), measures.SCROLL_DURATION + 50);
      }
    }
  };

  const handleJump = (target: string) => {
    const jump = () => {
      const index = sections.indexOf(target);
      window.scrollTo(measures.vw * index, 0);
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

  if (measures.vw === 0) return <Viewport ref={viewport} />;

  return (
    <>
      <SEO section={active} />
      <Navbar
        handleJump={handleJump}
        active={active}
        vw={measures.vw}
        vh={measures.vh}
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
