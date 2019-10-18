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

import { useSwipeable, Swipeable } from 'react-swipeable';

const App: React.FC = () => {
  // const handlers = useSwipeable({ onSwipedDown: (eventData) => handleOnSwipe})

  const sections = ['home', 'skills', 'projects', 'about', 'contact'];

  const handleOnWheel = (e: React.WheelEvent<HTMLElement>) => {
    let target = 0;
    if (e.deltaY < 0 && current > 0) target = -1;
    else if (e.deltaY > 0 && current < sections.length - 1) target = 1;
    target && handleScroll('scroll', `${target}`);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      let target = 0;

      switch (e.key) {
        case 'ArrowDown':
          if (current < sections.length - 1) target = 1;
          break;
        case 'ArrowUp':
          if (current > 0) target = -1;
      }

      target && handleScroll('scroll', `${target}`);
    }
  };

  const handleOnSwipe = (target: number) => {
    if (
      (target === -1 && current === 0) ||
      (target === 1 && current === sections.length - 1)
    )
      return;

    target && handleScroll('scroll', `${target}`);
  };

  let current = 0;
  let scrolling = false;

  const handleScroll = (type: string, target: string) => {
    if (scrolling) return;

    let index = -1;

    switch (type) {
      case 'scroll':
        index = current += parseInt(target);
        break;
      case 'click':
        index = sections.indexOf(target);
        current = index;
        break;
    }

    scroller.scrollTo(sections[index], {
      duration: type === 'scroll' ? 490 : 0,
      smooth: 'easeOutCubic',
      ignoreCancelEvents: true,
    });

    scrolling = true;
    setTimeout(() => (scrolling = false), type === 'scroll' ? 500 : 0);
  };

  return (
    <Swipeable
      onSwipedDown={() => handleOnSwipe(-1)}
      onSwipedUp={() => handleOnSwipe(1)}
    >
      <Container
        onWheel={handleOnWheel}
        onKeyDown={handleOnKeyDown}
        tabIndex={0}
      >
        <Navbar handleScroll={handleScroll} />
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </Container>
    </Swipeable>
  );
};

const Container = styled.main``;

export default App;
