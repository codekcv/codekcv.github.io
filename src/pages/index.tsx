import React from 'react';
import './index.css';
import styled from 'styled-components';
import { Home } from '../components/Home';
import { Skills } from '../components/Skills';

import { scroller } from 'react-scroll';
import { Navbar } from '../components/Navbar';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

const App: React.FC = () => {
  const sections = ['home', 'skills', 'projects', 'about', 'contact'];

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (!scrolling) {
      let target = 0;
      if (e.deltaY < 0 && current > 0) target = -1;
      else if (e.deltaY > 0 && current < sections.length - 1) target = +1;

      if (target) {
        handleScroll('scroll', `${(current += target)}`);
      }
    }
  };

  let current = 0;
  let scrolling = false;

  const handleScroll = (type: string, target: string) => {
    let index = -1;

    switch (type) {
      case 'scroll':
        index = parseInt(target);
        break;
      case 'click':
        index = sections.indexOf(target);
        current = index;
        break;
    }

    if (!scrolling) {
      scroller.scrollTo(sections[index], {
        duration: type === 'scroll' ? 490 : 0,
        smooth: 'easeOutCubic',
      });

      scrolling = true;
      setTimeout(() => (scrolling = false), type === 'scroll' ? 500 : 0);
    }
  };

  return (
    <Container onWheel={handleOnWheel}>
      <Navbar handleScroll={handleScroll} />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </Container>
  );
};

const Container = styled.main``;

export const Section = styled.section`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default App;
