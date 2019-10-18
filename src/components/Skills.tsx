import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import Particles from 'react-particles-js';

import logoHtml from '../images/logos/html5.png';
import logoCss from '../images/logos/css3.png';
import logoJavascript from '../images/logos/javascript.jpg';
import logoTypescript from '../images/logos/typescript.jpg';
import logoReact from '../images/logos/reactjs.png';
import logoRedux from '../images/logos/redux.png';
import logoSass from '../images/logos/sass.png';
import logoGatsby from '../images/logos/gatsbyjs.png';
import logoGraphql from '../images/logos/graphql.png';
import logoGit from '../images/logos/git.png';
import logoApollo from '../images/logos/apollo.png';
import logoMongodb from '../images/logos/mongodb3.png';
import logoPostgreSQL from '../images/logos/postgreSQL.png';
import logoNode from '../images/logos/nodejs.png';
import logoVscode from '../images/logos/vscode.png';
import logoExpress from '../images/logos/express.png';
import logoPostman from '../images/logos/postman.png';

interface Props {}

const getLogos = graphql`
  query {
    logos: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          name
          relativePath
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

// const getLogos = graphql`
//   query {
//     logos: allFile(filter: { relativeDirectory: { eq: "svg" } }) {
//       edges {
//         node {
//           name
//         }
//       }
//     }
//   }
// `;

export const Skills: React.FC<Props> = () => {
  const {
    logos: { edges },
  } = useStaticQuery(getLogos);

  console.log(edges);

  // console.log(edges);

  // const Logos = data.logos.edges.map((logo: any) => {
  //   // console.log(logo);
  //   const node = logo.node;

  //   return (
  //     <>
  //       <p className="name">{node.name}</p>
  //       {/* <Img fluid={logo.childImageSharp.fluid} /> */}
  //     </>
  //   );
  // });

  const frontendSkills = [
    {
      name: 'HTML5',
      logo: logoHtml,
      bg: 'white',
    },
    {
      name: 'CSS3',
      logo: logoCss,
      bg: 'white',
    },
    {
      name: 'JavaScript',
      logo: logoJavascript,
      bg: 'white', //'#f7df1d',
    },
    {
      name: 'TypeScript',
      logo: logoTypescript,
      bg: 'white', //'#027ad0',
    },
  ];

  return (
    <Element name="skills">
      <Container id="skills">
        <Particles
          className="particlesjs"
          width="100%"
          height="100vh"
          params={{
            particles: {
              number: {
                value: 17,
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 3,
                out_mode: 'out',
              },
              shape: {
                type: ['images'],
                images: [
                  {
                    src: logoHtml,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoNode,
                    height: 15,
                    width: 25,
                  },
                  {
                    src: logoCss,
                    height: 10,
                    width: 7,
                  },
                  {
                    src: logoJavascript,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoExpress,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoPostman,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoTypescript,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoReact,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoRedux,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoGatsby,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoGraphql,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoSass,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoGit,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoApollo,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoPostgreSQL,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoVscode,
                    height: 10,
                    width: 10,
                  },
                  {
                    src: logoMongodb,
                    height: 10,
                    width: 10,
                  },
                ],
              },
              size: {
                value: 20,
              },
            },
          }}
        />

        <div className="card front-end">
          <div className="title">
            <h1>Front-End Technologies</h1>
            <hr />
            <br />
          </div>

          <div className="skills">
            <p>HTML5</p>
            <p>CSS3 / SASS</p>
            <p>JavaScript ES6+</p>
            <p>TypeScript</p>
            <p>ReactJS</p>
            <p>Redux</p>
          </div>

          {/* <div className="tech-container">
            {frontendSkills.map(skill => {
              // const image = edges.find(
              //   (edge: any) => edge.node.name === skill.file
              // ).node.childImageSharp.fluid;

              // const image = edges.find(
              //   (edge: any) => edge.node.name === skill.file
              // ).node.name;

              return (
                <>
                  <div className="whole-button">
                    <div
                      key={skill.name}
                      className="skill-container"
                      style={{ background: skill.bg }}
                    >
                      {/* <p className="skill-name">{skill.name}</p> }
                      {/* <hr /> */}

          {/* <Img fluid={image} /> */}
          {/* <div className="gradient"></div> */}
          {/* <img src={skill.logo} /> */}
          {/* <img src={`../images/svg/${skill.file}`} /> }
                    </div>
                  </div>
                </>
              );
            })}
          </div> */}
        </div>
        <div className="card back-end">
          <h1>Back-End Technologies</h1>
          <hr />
          <br />
          <p>NodeJS</p>
          <p>ExpressJS</p>
          <p>MongoDB</p>
          <p>PostgresSQL</p>
          <p>Postman</p>
        </div>
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

  .particlesjs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .whole-button {
    .skill-container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 75px;
      height: 75px;
      margin: 0.25rem;
      padding: 0.5rem;
      box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
      background: yellow;
      border-radius: 12px;

      .skill-name {
        text-align: center;
        font-size: 0.8rem;
      }

      .gradient {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          to top,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.25)
        );
        border-radius: 12px;
      }
    }
  }

  .card {
    background: rgba(255, 255, 255, 0.8);
    width: 50%;
    min-height: 200px;
    padding: 1rem;
    margin: 1rem 1rem;
    box-shadow: 0 0 5px black;
    text-align: center;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 1rem;
    }

    .tech-container {
      display: flex;

      .tech {
        width: 500px;
        border: 1px pink solid;

        .name {
          font-size: 1rem;
        }

        .logo {
          height: 128px;
          border: 1px pink solid;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    .card {
      width: 400px;
      height: 400px;
    }
  }
`;
