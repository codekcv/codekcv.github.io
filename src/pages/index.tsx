import React, { useState, useRef, useLayoutEffect } from 'react';
import '../components/global.css';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Home } from '../sections/Home';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Blog } from '../sections/Blog';
import { FlyingText } from '../components/FlyingText';
import { SEO } from '../components/SEO';

const App: React.FC = () => {
  const sections: string[] = [
    'Home',
    'Skills',
    'Projects',
    'About',
    'Contact',
    'Blog',
  ];
  const [active, setActive] = useState<string>(sections[0]);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [swipeDone, setSwipeDone] = useState<boolean>(true);
  const [swipeX, setSwipeX] = useState<number>(0);
  const [measures, setMeasures] = useState<any>({ vw: 0 });
  const [snap, setSnap] = useState<number>(0);
  const homeRef = useRef<React.FC>(null);
  const skillsRef = useRef<React.FC>(null);
  const projectsRef = useRef<React.FC>(null);
  const aboutRef = useRef<React.FC>(null);
  const contactRef = useRef<React.FC>(null);
  const blogRef = useRef<React.FC>(null);
  const viewport: any = useRef(null);

  useLayoutEffect(() => {
    const handleMeasurements = () => {
      const vw = viewport.current.getBoundingClientRect().width;
      const vh = viewport.current.getBoundingClientRect().height;
      const isMobile = vw < 768;
      const SCROLL_DURATION = isMobile ? 250 : 500;
      const ANIMATION_DELAY = isMobile ? 250 : 150;

      setMeasures({ vw, vh, isMobile, SCROLL_DURATION, ANIMATION_DELAY });
    };

    handleMeasurements();
    window.scrollTo(0, 0);
    window.addEventListener('resize', handleMeasurements);
    window.addEventListener('touchmove', e => e.preventDefault(), {
      passive: false,
    });

    return () => {
      window.removeEventListener('resize', handleMeasurements);
      window.removeEventListener('touchmove', e => e.preventDefault());
    };
  }, []);

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) =>
    !scrolling && (e.deltaY < 0 ? handleScroll('left') : handleScroll('right'));

  const handleSwipe = (start: boolean, e: React.TouchEvent<HTMLElement>) => {
    e.preventDefault();
    if (scrolling) return;

    if (start) {
      setSwipeX(e.touches[0].clientX);
      swipeDone && setSwipeDone(false);
    } else {
      const threshold = measures.vw / 10;
      if (Math.abs(swipeX - e.touches[0].clientX) >= threshold && !swipeDone) {
        swipeX < e.touches[0].clientX
          ? handleScroll('left')
          : handleScroll('right');
        setSwipeDone(true);
      }
    }
  };

  const handleScroll = (dir: string | number) => {
    dir === 'left' && active !== sections[0] && (dir = -1);
    dir === 'right' && active !== sections.slice(-1)[0] && (dir = 1);

    if (typeof dir === 'number') {
      const index = sections.indexOf(active) + dir;
      const pos = measures.vw * index - window.pageXOffset;

      setActive(sections[index]);
      setScrolling(true);
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

  const [update, setUpdate] = useState(0);

  return (
    <>
      <SEO section={active} />
      {measures.vw ? (
        <>
          <Navbar
            menu={sections}
            measures={measures}
            handleJump={handleJump}
            active={active}
          />
          <Container
            className="content-container"
            onWheel={handleOnWheel}
            onTouchStart={e => handleSwipe(true, e)}
            onTouchMove={e => handleSwipe(false, e)}
            onClick={() => setUpdate(x => x + 1)}
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
            <Contact
              contactRef={contactRef}
              measures={measures}
              active={active}
            />
            <Blog blogRef={blogRef} measures={measures} active={active} />
            <FlyingText
              index={sections.indexOf(active)}
              active={active}
              isScrolling={scrolling}
              measures={measures}
              refs={[
                homeRef,
                skillsRef,
                projectsRef,
                aboutRef,
                contactRef,
                blogRef,
              ]}
              snap={snap}
              setSnap={setSnap}
            />
          </Container>
        </>
      ) : null}
      <div style={{ width: '100vw', height: '100vh' }} ref={viewport} />
    </>
  );
};

const Container = styled.main`
  background: white;
  display: flex;
  width: 900vw;
  height: 100vh;
  background: linear-gradient(
      22.5deg,
      rgba(67, 67, 67, 0.02) 0%,
      rgba(67, 67, 67, 0.02) 29%,
      rgba(47, 47, 47, 0.02) 29%,
      rgba(47, 47, 47, 0.02) 37%,
      rgba(23, 23, 23, 0.02) 37%,
      rgba(23, 23, 23, 0.02) 55%,
      rgba(182, 182, 182, 0.02) 55%,
      rgba(182, 182, 182, 0.02) 69%,
      rgba(27, 27, 27, 0.02) 69%,
      rgba(27, 27, 27, 0.02) 71%,
      rgba(250, 250, 250, 0.02) 71%,
      rgba(250, 250, 250, 0.02) 100%
    ),
    linear-gradient(
      67.5deg,
      rgba(117, 117, 117, 0.02) 0%,
      rgba(117, 117, 117, 0.02) 14%,
      rgba(199, 199, 199, 0.02) 14%,
      rgba(199, 199, 199, 0.02) 40%,
      rgba(33, 33, 33, 0.02) 40%,
      rgba(33, 33, 33, 0.02) 48%,
      rgba(135, 135, 135, 0.02) 48%,
      rgba(135, 135, 135, 0.02) 60%,
      rgba(148, 148, 148, 0.02) 60%,
      rgba(148, 148, 148, 0.02) 95%,
      rgba(53, 53, 53, 0.02) 95%,
      rgba(53, 53, 53, 0.02) 100%
    ),
    linear-gradient(
      135deg,
      rgba(190, 190, 190, 0.02) 0%,
      rgba(190, 190, 190, 0.02) 6%,
      rgba(251, 251, 251, 0.02) 6%,
      rgba(251, 251, 251, 0.02) 18%,
      rgba(2, 2, 2, 0.02) 18%,
      rgba(2, 2, 2, 0.02) 27%,
      rgba(253, 253, 253, 0.02) 27%,
      rgba(253, 253, 253, 0.02) 49%,
      rgba(128, 128, 128, 0.02) 49%,
      rgba(128, 128, 128, 0.02) 76%,
      rgba(150, 150, 150, 0.02) 76%,
      rgba(150, 150, 150, 0.02) 100%
    ),
    linear-gradient(90deg, #fff, #fff);
`;

export default App;
