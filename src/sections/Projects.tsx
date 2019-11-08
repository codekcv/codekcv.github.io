import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { SCROLL_DURATION, ANIMATION_DELAY } from '../components/constants';
import { isMobile } from 'react-device-detect';

interface Props {
  active: string;
  projectsRef: React.MutableRefObject<any>;
  snap: boolean;
}

export const Projects: React.FC<Props> = ({ active, projectsRef, snap }) => {
  const colors = [
    {
      'ES6+': 'orange',
      TypeScript: 'blue',
      Gatsby: 'purple',
      GraphQL: 'violet',
      MongoDB: 'green',
      Axios: 'white',
    },
  ];

  const [projects, setProjects] = useState([
    {
      title: 'ChristianVillamin.github.io',
      description: 'My personal portfolio website.',
      technologies: ['TypeScript', 'Gatsby', 'React', 'GraphQL'],
      code: 'https://github.com/ChristianVillamin/ChristianVillamin.github.io',
      demo: 'http://christianvillamin.github.io',
    },
    {
      title: 'listerNote',
      description:
        'A Kanban style note organizer. You can use boards, lists, and cards.',
      technologies: ['TypeScript', 'React', 'Redux', 'Hooks'],
      code: 'https://github.com/ChristianVillamin/lister',
      demo: 'https://listernote.netlify.com/',
    },
    {
      title: 'Anonymous Message Board',
      description: 'A full stack application message board.',
      technologies: ['ES6+', 'Node', 'Express', 'MongoDB', 'Chai', 'Mocha'],
      code:
        'https://github.com/ChristianVillamin/boilerplate-project-messageboard',
      demo: 'https://cv-board.glitch.me',
    },
    {
      title: 'Stock Price Checker',
      description: 'Fetches from an API to get latest stock prices.',
      technologies: ['ES6+', 'Node', 'Express', 'MongoDB', 'Axios'],
      code:
        'https://github.com/ChristianVillamin/boilerplate-project-stockchecker',
      demo: 'https://cv-stock.glitch.me/',
    },
    {
      title: 'Podomoro Clock',
      description: 'A productivity app for study and health.',
      technologies: ['ES6+', 'React', 'Hooks'],
      code: 'https://codepen.io/ChristianVillamin/pen/ydjajy',
      demo: 'https://codepen.io/ChristianVillamin/full/ydjajy',
    },
    {
      title: 'Tribute Page',
      description: 'A tribute to Walter White from Breaking Bad.',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      code: 'https://codepen.io/ChristianVillamin/pen/wLwQGP',
      demo: 'https://codepen.io/ChristianVillamin/full/wLwQGP',
    },
    {
      title: 'Issue Tracker',
      description: 'Submit issues of projects.',
      technologies: ['MongoDB', 'Node', 'Helmet', 'Unit Testing'],
      code:
        'https://github.com/ChristianVillamin/boilerplate-project-issuetracker',
      demo: 'https://cv-tracker.glitch.me/',
    },
    {
      title: 'A URL Shorterner Microservice.',
      description: 'Transforms long links into a short one.',
      technologies: ['ES6+', 'MongoDB', 'Node', 'Express'],
      code:
        'https://github.com/ChristianVillamin/boilerplate-project-urlshortener',
      demo: 'http://cv-url.glitch.me/',
    },
    {
      title: 'Mini-Piano',
      description: 'A virtual 12-keys piano. (Includes 3 songs!)',
      technologies: ['ES6+', 'React', 'Hooks'],
      code: 'https://codepen.io/ChristianVillamin/pen/EBQvpo',
      demo: 'https://codepen.io/ChristianVillamin/full/EBQvpo',
    },
    {
      title: 'Calculator',
      description: 'A calculator. Part of freeCodeCamp project.',
      technologies: ['ES6+', 'React', 'Hooks'],
      code: 'https://codepen.io/ChristianVillamin/pen/rEdVXo',
      demo: 'https://codepen.io/ChristianVillamin/full/rEdVXo',
    },

    {
      title: 'Biplane Landing Page',
      description: 'A fun page I made for my likes of biplanes.',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      code: 'https://codepen.io/ChristianVillamin/pen/KjwLdp',
      demo: 'https://codepen.io/ChristianVillamin/full/KjwLdp',
    },

    {
      title: 'Treemap Diagram',
      description: 'A data visualization, using treemap design.',
      technologies: ['JavaScript', 'D3'],
      code: 'https://codepen.io/ChristianVillamin/pen/rEgVPp',
      demo: 'https://codepen.io/ChristianVillamin/full/rEgVPp',
    },
    {
      title: 'Choropleth Map',
      description: 'A data visualization, using choropleth design.',
      technologies: ['JavaScript', 'D3'],
      code: 'https://codepen.io/ChristianVillamin/pen/pXBLXq',
      demo: 'https://codepen.io/ChristianVillamin/full/pXBLXq',
    },
  ]);

  const DELAY = 100;
  const [delays, setDelays] = useState<number[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const delayArr = [];
    for (let i = 0; i < projects.length; i++) delayArr.push(DELAY * i);
    setDelays(delayArr);
  }, []);

  useEffect(() => {
    active === 'Projects'
      ? !toggle &&
        (() => {
          !isMobile &&
            (() => {
              const randomizedProjects = [...projects];
              const randomizedDelays = [...delays];

              randomizedProjects.sort(() => Math.random() - 0.5);
              randomizedDelays.sort(() => Math.random() - 0.5);

              setProjects(randomizedProjects);
              setDelays(randomizedDelays);
            })();
          setTimeout(() => setToggle(true), ANIMATION_DELAY);
        })()
      : toggle && setTimeout(() => setToggle(false), SCROLL_DURATION);
  }, [active]);

  return (
    <Container id="projects" snap={snap}>
      <div className="projects-container" ref={projectsRef}>
        {projects.map((project, index) => (
          <div className="select" key={project.title}>
            <Project anim={isMobile ? 1 : toggle ? 1 : 0} delay={delays[index]}>
              <h2 className="title">{project.title}</h2>
              <a className="code" href={project.code}>
                Code
              </a>
              <a className="demo" href={project.demo}>
                Demo
              </a>
              <p className="description">{project.description}</p>

              {project.technologies.map(technology => (
                <span className="technologies" key={technology}>
                  {technology}
                </span>
              ))}
            </Project>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.section<{ snap: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.snap ? 'flex-start' : 'center')};
  align-items: center;
  margin-top: ${props => (props.snap ? '40px' : 0)};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  h2 {
    display: inline-block;
    margin-right: 4px;
  }

  .code,
  .demo {
    text-decoration: none;
    margin-right: 4px;
    padding: 2px 4px;
  }

  .projects-container {
    max-width: 95%;
  }

  @media only screen and (min-width: 768px) {
    h2 {
      margin-right: 8px;
    }

    .code,
    .demo {
      text-decoration: none;
      margin-right: 8px;
      padding: 2px 4px;
      border-radius: 3px;
    }

    .projects-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;
      max-width: 1920;

      .select {
        border-radius: 12px;
        transition: 0.5s ease;

        :hover {
          box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
          transform: translateY(-10%);
        }
      }
    }
  }
`;

const Project = styled.div<{ anim: number; delay: number }>`
  background: white;
  margin: 6px 6px 18px 6px;
  border-radius: 6px;

  transition: ${props => (props.anim ? '0.75s' : 0)} ease;
  transition-delay: ${props => (props.anim ? props.delay + 'ms' : 0)};
  transform: ${props => (props.anim ? `scale(1)` : `scale(0)`)};
  opacity: ${props => (props.anim ? 1 : 0)};

  .title {
    font-size: 0.95rem;
  }

  .description {
    font-size: 0.85rem;
    margin: 4px 0;
  }

  .technologies {
    background: lightcoral;
    background: mediumvioletred;
    font-weight: 300;
    color: white;
    border-radius: 3px;
    margin: 2px;
    padding: 2px 3px;
    font-size: 0.75rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 24px;
    /* padding: 16px; */
    border-radius: 6px;

    .title {
      font-size: 1.1vw;
    }

    .description {
      font-size: 1vw;
      margin: 4px 0;
    }

    .technologies {
      font-weight: 300;
      color: white;
      border-radius: 8px;
      margin: 3px;
      padding: 3px 6px;
      font-size: 0.85vw;
    }
  }
`;
