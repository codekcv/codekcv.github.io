import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Link } from 'gatsby';

interface Props {}

export const Projects: React.FC<Props> = () => {
  const projects = [
    {
      title: 'listerNote',
      description:
        'A note organizer inspired by Trello. It uses a kanban board where you can add lists with cards.',
      technologies: ['TypeScript', 'React', 'Redux', 'Hooks'],
      github: '',
      demo: '',
    },
    {
      title: 'Anonymous Message Board',
      description: 'A full stack application message board.',
      technologies: ['TypeScript', 'React', 'Redux', 'MongoDB', 'Express'],
      github: '',
      demo: '',
    },
    {
      title: 'Personal Portfolio',
      description: 'My own portfolio website you are currently in.',
      technologies: ['TypeScript', 'React', 'GraphQL'],
      github: '',
      demo: '',
    },
    {
      title: 'Mini-Piano',
      description: 'A virtual 12-keys piano. (Includes 3 songs!)',
      technologies: ['JavaScript', 'React', 'Hooks'],
      github: '',
      demo: '',
    },
    {
      title: 'Calculator',
      description: 'A calculator. Part of freeCodeCamp project.',
      technologies: ['JavaScript', 'React', 'Hooks'],
      github: '',
      demo: '',
    },
  ];

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
              <p className="description">{project.description}</p>
              {project.technologies.map(technology => (
                <span className="technologies" key={technology}>
                  {technology}
                </span>
              ))}
            </Project>
          ))}
        </div>

        <div className="see-more">
          <Link to="/project">All Projects</Link>
        </div>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  background: rgb(40, 70, 70);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

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
      margin-bottom: 4px;
    }

    .technologies {
      background: lightcoral;
      border-radius: 4px;
      margin: 3px;
      padding: 3px;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    .title {
      font-size: 8vw;
      text-shadow: 0 5px silver;
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
