import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Particles from 'react-particles-js';

interface Props {}

const getLogos = graphql`
  query {
    logos: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export const Skills: React.FC<Props> = () => {
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

  const frontendSkills = [
    {
      name: 'HTML5',
      logo: getImage('html5'),
    },
    {
      name: 'CSS3',
      logo: getImage('css3'),
    },
    {
      name: 'ES6+',
      logo: getImage('javascript'),
    },
    {
      name: 'TS',
      logo: getImage('typescript'),
    },
    {
      name: 'React',
      logo: getImage('reactjs'),
    },
    {
      name: 'Redux',
      logo: getImage('redux'),
    },
    {
      name: 'Gatsby',
      logo: getImage('gatsbyjs'),
    },
    {
      name: 'D3',
      logo: getImage('d3'),
    },
  ];

  const backendSkills = [
    {
      name: 'NodeJS',
      logo: getImage('nodejs'),
    },
    {
      name: 'RESTful',
      logo: getImage('rest'),
    },
    {
      name: 'GraphQL',
      logo: getImage('graphql'),
    },
    {
      name: 'MongoDB',
      logo: getImage('mongo4'),
    },
    {
      name: 'PostgreSQL',
      logo: getImage('postgreSQL'),
    },
    {
      name: 'Apollo',
      logo: getImage('apollo'),
    },
    {
      name: 'Express',
      logo: getImage('express'),
    },
  ];

  const environment = [
    {
      name: 'Git',
      logo: getImage('git'),
    },
    {
      name: 'VSCode',
      logo: getImage('vscode'),
    },
    {
      name: 'Postman',
      logo: getImage('postman'),
    },
    {
      name: 'Jest',
      logo: getImage('jest'),
    },
    {
      name: 'ChaiJS',
      logo: getImage('chai'),
    },
    {
      name: 'MochaJS',
      logo: getImage('mocha'),
    },
  ];

  return (
    <Element name="skills">
      <Container id="skills">
        <Particles className="particles" />
        <Card>
          <div className="title-area">
            <h1>Front-End Technologies</h1>
            <hr />
          </div>

          <div className="skills-area">
            {frontendSkills.map(skill => {
              return (
                <div key={skill.name}>
                  <div className="logo-container">
                    <Img fluid={skill.logo} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <div className="title-area">
            <h1>Back-End Technologies</h1>
            <hr />
          </div>

          <div className="skills-area">
            {backendSkills.map(skill => {
              return (
                <div key={skill.name}>
                  <div className="logo-container">
                    <Img fluid={skill.logo} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <div className="title-area">
            <h1>Environment</h1>
            <hr />
          </div>

          <div className="skills-area">
            {environment.map(skill => {
              return (
                <div key={skill.name}>
                  <div className="logo-container">
                    <Img fluid={skill.logo} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(32, 38, 51);
  width: 100%;
  min-height: 100vh;

  .particles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(255, 255, 255, 0.8);
  margin: 10px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 7px 30px -10px inset rgba(150, 170, 180, 0.5);

  .title-area {
    h1 {
      text-align: center;
    }
  }

  .skills-area {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .logo-container {
      width: 60px;
      height: 60px;
      margin: 0.5rem;
      padding: 6px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
    }
  }

  @media only screen and (min-width: 768px) {
    width: 350px;
  }
`;
