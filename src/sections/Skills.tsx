import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { SCROLL_DURATION, ANIMATION_DELAY } from '../components/constants';

const getLogos = graphql`
  query {
    logos: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

interface Props {
  active: string;
  addPlace: (index: number, posY: number) => void;
}

export const Skills: React.FC<Props> = ({ active, addPlace }) => {
  const {
    logos: { edges },
  } = useStaticQuery(getLogos);

  const logos = edges.map((edge: any) => {
    const { node } = edge;

    return {
      name: node.name,
      fluid: node.childImageSharp.fluid,
    };
  });

  const getImage = (name: string) => {
    return logos.find((logo: any) => logo.name === name).fluid;
  };

  const frontendSkills: Object[] = [
    {
      name: 'HTML5',
      logo: getImage('html5'),
      link: `https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5`,
    },
    {
      name: 'CSS3',
      logo: getImage('css3'),
      link: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
    },
    {
      name: 'JS ES6+',
      logo: getImage('javascript'),
      link: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
    },
    {
      name: 'TypeScript',
      logo: getImage('typescript'),
      link: `https://www.typescriptlang.org/`,
    },
    {
      name: 'React',
      logo: getImage('reactjs'),
      link: `https://reactjs.org/`,
    },
    {
      name: 'Redux',
      logo: getImage('redux'),
      link: `https://redux.js.org/`,
    },
    {
      name: 'Gatsby',
      logo: getImage('gatsbyjs'),
      link: `https://www.gatsbyjs.org/`,
    },
    {
      name: 'Apollo',
      logo: getImage('apollo'),
      link: `https://www.apollographql.com/`,
    },
    {
      name: 'D3',
      logo: getImage('d3'),
      link: `https://d3js.org/`,
    },
  ];

  const backendSkills: Object[] = [
    {
      name: 'NodeJS',
      logo: getImage('nodejs'),
      link: `https://nodejs.org/`,
    },
    {
      name: 'RESTful',
      logo: getImage('rest'),
      link: `https://restfulapi.net/`,
    },
    {
      name: 'GraphQL',
      logo: getImage('graphql'),
      link: `https://graphql.org/`,
    },
    {
      name: 'MongoDB',
      logo: getImage('mongodb'),
      link: `http://mongodb.com/`,
    },
    {
      name: 'PostgreSQL',
      logo: getImage('postgreSQL'),
      link: `https://www.postgresql.org/`,
    },
    {
      name: 'Express',
      logo: getImage('express'),
      link: `https://expressjs.com/`,
    },
    {
      name: 'JWT',
      logo: getImage('jwt'),
      link: `https://jwt.io/`,
    },
    {
      name: 'socket.io',
      logo: getImage('socket'),
      link: `https://socket.io/`,
    },
  ];

  const environment: Object[] = [
    {
      name: 'Pop!_OS',
      logo: getImage('pop'),
      link: `https://system76.com/pop`,
    },
    {
      name: 'VSCode',
      logo: getImage('vscode'),
      link: `https://code.visualstudio.com/`,
    },
    {
      name: 'Git',
      logo: getImage('git'),
      link: `https://git-scm.com/`,
    },
    {
      name: 'GitHub',
      logo: getImage('github'),
      link: `https://github.com/christianvillamin`,
    },
    {
      name: 'NPM',
      logo: getImage('npm'),
      link: `https://www.npmjs.com/`,
    },
    {
      name: 'Postman',
      logo: getImage('postman'),
      link: `https://www.getpostman.com/`,
    },
    {
      name: 'Jest',
      logo: getImage('jest'),
      link: `https://jestjs.io/`,
    },
    {
      name: 'ChaiJS',
      logo: getImage('chai'),
      link: `https://www.chaijs.com/`,
    },
    {
      name: 'MochaJS',
      logo: getImage('mocha'),
      link: `https://mochajs.org/`,
    },
  ];

  const skillsArr: any[] = [
    ['Front-End', frontendSkills],
    ['Back-End', backendSkills],
    ['System', environment],
  ];

  const [toggle, setToggle] = useState<boolean>(false);
  const [linger, setLinger] = useState<boolean>(false);

  if (!linger)
    active === 'skills'
      ? !toggle && setToggle(true)
      : toggle &&
        (() => {
          setLinger(true);

          setTimeout(() => {
            setLinger(false);
            setToggle(false);
          }, SCROLL_DURATION - 20);
        })();

  const ref: any = useRef(null);

  useEffect(() => {
    addPlace(1, ref.current.getBoundingClientRect().top);
  }, [toggle]);

  return (
    <Container id="skills">
      <div id="main" ref={ref}>
        {skillsArr.map((skills, index) => (
          <Card
            key={`${skills[0]}`}
            anim={toggle}
            index={ANIMATION_DELAY + 225 * index}
          >
            <div className="title-area">
              <h1>{skills[0]}</h1>
              <hr />
            </div>

            <div className="skills-area">
              {skills[1].map((skill: any) => (
                <div key={skill.name}>
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="logo-container">
                      <Img fluid={skill.logo} loading="eager" />

                      <div className="skill-name">{skill.name}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </Card>
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

  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;

    .title-area {
      width: 100%;
      background: rgba(45, 45, 70, 1);
    }
  }

  @media only screen and (max-height: 660px) {
    margin-top: 8vh;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 768px) {
    #main {
      flex-direction: row;
      margin-top: 120px;
      padding-top: 60px;
    }
  }
`;

const Card = styled.div<{ anim: boolean; index: number }>`
  max-width: 90%;
  height: 100%;

  background: rgba(0, 0, 0, 0.15);
  margin: 1vh 0;
  padding: 0.4rem;
  border-radius: 4px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.6);
  flex: 1;

  transition: ${props => (props.anim ? '0.75s' : 'none')} ease;
  transition-delay: ${props =>
    props.anim ? props.index + 'ms' : SCROLL_DURATION - 10 + 'ms'};
  transform: ${props => (props.anim ? 0 : `translateY(-200px)`)};
  opacity: ${props => (props.anim ? 1 : 0)};

  .title-area {
    margin-bottom: 6px;
    padding-bottom: 2px;

    h1 {
      color: silver;
      font-weight: 100;
      font-size: 2rem;
      text-align: center;
    }
  }

  .skills-area {
    display: flex;
    flex-wrap: wrap;

    .logo-container {
      position: relative;
      width: 14vw;
      height: 14vw;
      margin: 0.2rem;
      padding: 6px;
      background: white;
      border-radius: 6px;
      transition: 0.3s;

      .skill-name {
        position: absolute;
        left: 0;
        width: 100%;
        transition: 0.3s;
        opacity: 0;
        text-align: center;
        border-radius: 4px;
        font-size: 4vw;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 25vw;
    margin: 2vh 2vw;
    padding: 1rem;
    border-radius: 16px;
    align-items: center;

    .skills-area {
      .logo-container {
        width: 70px;
        height: 70px;
        margin: 0.5rem;
        padding: 12px;
        border-radius: 16px;

        .skill-name {
          font-size: 14px;
          text-decoration: none;
          color: black;
        }

        :hover {
          background: none;
          transform: scale(1.1) translateY(-10px);

          .skill-name {
            opacity: 1;
            transform: translateY(13px);
          }
        }
      }
    }
  }
`;
