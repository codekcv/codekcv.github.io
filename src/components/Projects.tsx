import React, { useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {
  active: string;
}

export const Projects: React.FC<Props> = ({ active }) => {
  const projects = [
    {
      title: 'listerNote',
      description:
        'A note organizer inspired by Trello. You can make boards, lists, and cards.',
      technologies: ['TypeScript', 'React', 'Redux', 'Hooks'],
      github: 'https://github.com/ChristianVillamin/lister',
      demo: 'https://listernote.netlify.com/',
    },
    {
      title: 'Anonymous Message Board',
      description: 'A full stack application message board.',
      technologies: ['TypeScript', 'React', 'Redux', 'MongoDB', 'Express'],
      github:
        'https://github.com/ChristianVillamin/boilerplate-project-messageboard',
      demo: 'https://cv-board.glitch.me',
    },
    {
      title: 'Personal Portfolio',
      description: 'My own portfolio website you are currently in.',
      technologies: ['TypeScript', 'React', 'GraphQL'],
      github:
        'https://github.com/ChristianVillamin/ChristianVillamin.github.io',
      demo: 'http://christianvillamin.github.io',
    },
    {
      title: 'Mini-Piano',
      description: 'A virtual 12-keys piano. (Includes 3 songs!)',
      technologies: ['JavaScript', 'React', 'Hooks'],
      github: 'https://codepen.io/ChristianVillamin/pen/EBQvpo',
      demo: 'https://codepen.io/ChristianVillamin/pen/EBQvpo',
    },
    {
      title: 'Calculator',
      description: 'A calculator. Part of freeCodeCamp project.',
      technologies: ['JavaScript', 'React', 'Hooks'],
      github: 'https://codepen.io/ChristianVillamin/pen/rEdVXo',
      demo: 'https://codepen.io/ChristianVillamin/pen/rEdVXo',
    },
    {
      title: 'Stock Price Checker',
      description:
        'A full stack app. Fetches from an API to get latest stock prides..',
      technologies: ['JavaScript', 'Node', 'Express', 'MongoDB', 'Axios'],
      github:
        'https://github.com/ChristianVillamin/boilerplate-project-stockchecker',
      demo: 'https://cv-stock.glitch.me/',
    },
  ];

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Element name="projects">
      <Container id="projects">
        <div className="title-container">
          <h1 className="title">Projects</h1>
        </div>

        <div className="projects-container">
          {projects.map(project => (
            <Project key={project.title}>
              <h2>{project.title}</h2>
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
          ))}
        </div>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  background: rgb(40, 70, 70);

  .anim-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;

    width: 100%;
    height: 100vh;
  }

  h2 {
    display: inline-block;
    margin-right: 8px;
  }

  .github,
  .demo {
    text-decoration: none;
    margin-right: 8px;
    border: 1px pink solid;
    padding: 2px 4px;
    border-radius: 3px;
  }

  .title-container {
    .title {
      color: white;
      font-size: 10vw;
      text-shadow: 0 3px silver;
    }
  }

  .projects-container {
    max-width: 95%;

    .description {
      margin: 4px 0;
    }

    .technologies {
      background: lightcoral;
      font-size: 3.5vw;
      border-radius: 4px;
      margin: 3px;
      padding: 3px;
    }
  }

  @media only screen and (min-width: 768px) {
    .anim-container {
      flex-direction: row;
    }

    .title-container {
      .title {
        font-size: 8vw;
        text-shadow: 0 6.5px silver;
      }
    }

    .projects-container {
      .technologies {
        font-size: 1rem;
      }
    }
  }
`;

const Project = styled.div`
  background: white;
  margin: 8px;
  padding: 8px;
  border-radius: 6px;

  h2 {
    font-size: 1rem;
  }
`;
