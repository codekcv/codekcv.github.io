import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { SCROLL_DURATION } from '../components/constants';
import { isMobile } from 'react-device-detect';

interface Props {
  active: string;
  addPlace: (index: number, posY: number) => void;
}

export const Projects: React.FC<Props> = ({ active, addPlace }) => {
  const [projects, setProjects] = useState([
    {
      title: 'ChristianVillamin.github.io',
      description: 'My personal portfolio website.',
      technologies: ['TypeScript', 'Gatsby', 'React', 'GraphQL', 'Styled'],
      github:
        'https://github.com/ChristianVillamin/ChristianVillamin.github.io',
      demo: 'http://christianvillamin.github.io',
    },
    {
      title: 'listerNote',
      description:
        'A Kanban style note organizer. You can use boards, lists, and cards.',
      technologies: ['TypeScript', 'React', 'Redux', 'Hooks'],
      github: 'https://github.com/ChristianVillamin/lister',
      demo: 'https://listernote.netlify.com/',
    },
    {
      title: 'Anonymous Message Board',
      description: 'A full stack application message board.',
      technologies: ['ES6+', 'Node', 'Express', 'MongoDB', 'Chai', 'Mocha'],
      github:
        'https://github.com/ChristianVillamin/boilerplate-project-messageboard',
      demo: 'https://cv-board.glitch.me',
    },
    {
      title: 'Stock Price Checker',
      description:
        'A full stack app. Fetches from an API to get latest stock prides..',
      technologies: ['ES6+', 'Node', 'Express', 'MongoDB', 'Axios'],
      github:
        'https://github.com/ChristianVillamin/boilerplate-project-stockchecker',
      demo: 'https://cv-stock.glitch.me/',
    },
    {
      title: 'Mini-Piano',
      description: 'A virtual 12-keys piano. (Includes 3 songs!)',
      technologies: ['ES6+', 'React', 'Hooks'],
      github: 'https://codepen.io/ChristianVillamin/pen/EBQvpo',
      demo: 'https://codepen.io/ChristianVillamin/pen/EBQvpo',
    },
    {
      title: 'Calculator',
      description: 'A calculator. Part of freeCodeCamp project.',
      technologies: ['ES6+', 'React', 'Hooks'],
      github: 'https://codepen.io/ChristianVillamin/pen/rEdVXo',
      demo: 'https://codepen.io/ChristianVillamin/pen/rEdVXo',
    },
    {
      title: 'Podomoro Clock',
      description: 'A productivity app for study and health.',
      technologies: ['ES6+', 'React', 'Hooks'],
      github: 'https://codepen.io/ChristianVillamin/pen/ydjajy',
      demo: 'https://codepen.io/ChristianVillamin/pen/ydjajy',
    },

    {
      title: 'Tribute Page',
      description: 'A tribute to Walter White from Breaking Bad.',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      github: 'https://codepen.io/ChristianVillamin/pen/wLwQGP',
      demo: 'https://codepen.io/ChristianVillamin/pen/wLwQGP',
    },
    {
      title: 'Biplane Landing Page',
      description: 'A fun page I made for my likes of biplanes.',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      github: 'https://codepen.io/ChristianVillamin/pen/wLwQGP',
      demo: 'https://codepen.io/ChristianVillamin/pen/wLwQGP',
    },
    {
      title: 'Technical Documentation',
      description: 'A short HTML documentation page.',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      github: 'https://codepen.io/ChristianVillamin/pen/PrqegB',
      demo: 'https://codepen.io/ChristianVillamin/pen/PrqegB',
    },
    {
      title: 'Treemap Diagram',
      description: 'A short HTML documentation page.',
      technologies: ['JavaScript', 'D3'],
      github: 'https://codepen.io/ChristianVillamin/pen/rEgVPp',
      demo: 'https://codepen.io/ChristianVillamin/pen/rEgVPp',
    },
    {
      title: 'Choropleth Map',
      description: 'A short HTML documentation page.',
      technologies: ['JavaScript', 'D3'],
      github: 'https://codepen.io/ChristianVillamin/pen/pXBLXq',
      demo: 'https://codepen.io/ChristianVillamin/pen/pXBLXq',
    },
  ]);

  const DELAY = 100;
  const [delays, setDelays] = useState<number[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const [linger, setLinger] = useState<boolean>(false);
  const ref: any = useRef(null);

  useEffect(() => {
    addPlace(2, ref.current.getBoundingClientRect().top);
  }, [toggle]);

  useEffect(() => {
    const delayArr = [];
    for (let i = 0; i < projects.length; i++) delayArr.push(DELAY * i);
    setDelays(delayArr);
  }, []);

  const [st, setSt] = useState(false);

  if (!linger) {
    if (active === 'Projects') {
      if (!toggle) {
        if (!isMobile) {
          if (!st) {
            setSt(true);
            const randomizedProjects = [...projects];
            randomizedProjects.sort(() => Math.random() - 0.5);
            setProjects(randomizedProjects);

            const randomizedDelays = [...delays];
            randomizedDelays.sort(() => Math.random() - 0.5);
            setDelays(randomizedDelays);

            setTimeout(() => {
              setToggle(true);
              setSt(false);
            }, 1);
          }
        } else {
          setToggle(true);
        }
      }
    } else {
      if (toggle) {
        setLinger(true);

        setTimeout(() => {
          setLinger(false);
          setToggle(false);
        }, SCROLL_DURATION - 20);
      }
    }
  }

  // !linger && active === 'projects'
  //   ? !toggle &&
  //     (() => {
  //       !isMobile
  //         ? !st &&
  //           (() => {
  //             setSt(true);
  //             const randomizedProjects = [...projects];
  //             randomizedProjects.sort(() => Math.random() - 0.5);
  //             setProjects(randomizedProjects);

  //             const randomizedDelays = [...delays];
  //             randomizedDelays.sort(() => Math.random() - 0.5);
  //             setDelays(randomizedDelays);

  //             setTimeout(() => {
  //               setToggle(true);
  //               setSt(false);
  //             }, 1);
  //           })()
  //         : setToggle(true);
  //     })()
  //   : toggle &&
  //     (() => {
  //       setLinger(true);

  //       setTimeout(() => {
  //         setLinger(false);
  //         setToggle(false);
  //       }, SCROLL_DURATION - 20);
  //     })();

  return (
    <Container id="projects">
      <div className="projects-container" ref={ref}>
        {projects.map((project, index) => (
          <div className="select" key={project.title}>
            <Project anim={toggle ? 1 : 0} delay={delays[index]}>
              <h2 className="title">{project.title}</h2>
              <a className="github" href={project.github}>
                GitHub
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

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h2 {
    display: inline-block;
    margin-right: 8px;
  }

  .github,
  .demo {
    text-decoration: none;
    margin-right: 8px;
    padding: 2px 4px;
    border-radius: 3px;
  }

  .projects-container {
    max-width: 95%;
  }

  @media only screen and (max-height: 660px) {
    .projects-container {
      margin-top: 8vh;
      justify-content: flex-start;
    }
  }

  @media only screen and (min-width: 768px) {
    .projects-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;

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
  margin: 24px;
  padding: 16px;
  border-radius: 6px;

  transition: ${props => (props.anim ? '0.75s' : 'none')} ease;
  transition-delay: ${props =>
    props.anim ? props.delay + 'ms' : SCROLL_DURATION - 10 + 'ms'};

  opacity: ${props => (props.anim ? 1 : 0)};
  transform: ${props => (props.anim ? `scale(1)` : `scale(0)`)};

  .title {
    font-size: 1rem;
  }

  .description {
    margin: 4px 0;
  }

  .technologies {
    background: lightcoral;
    background: mediumvioletred;
    font-weight: 300;
    color: white;
    border-radius: 8px;
    margin: 3px;
    padding: 3px 6px;
    font-size: 16px;
  }
`;
