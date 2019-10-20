import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const getProfile = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const About: React.FC = () => {
  const {
    profile: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getProfile);

  return (
    <Element name="about">
      <Container id="about">
        <h1>@About</h1>
        <div className="profile-container">
          <Img className="profile" fluid={fluid} />
        </div>
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            I am Christian Villamin, a web developer specializing in ReactJS and
            its environment.
          </p>
          <br />
          <ul>
            <li>I learn fast and love learning new things</li>
            <li>I'm flexible and adapts to environments fast</li>
            <li>I'm always on my programming game, it is life.</li>
          </ul>
          <br />
          <h2>Programming History</h2>
          <p>
            I have started programming when I was 11, using Blizzard's JASS
            scripting language to make mods for Warcraft III's custom maps. I
            learned it through self-interest and very much enjoyed the art of
            programming. I made Tower Defense, Tag games, War Chasers, and many
            more.
          </p>
          <br />
          <p>
            After that, I moved to Java to make my own mobile game using Android
            Studio and a library called libGDX. I made a 2D platform running
            game that is set in school. A year later after this, I learned C#
            and moved to Unity3D to step-up the game. ...more more story...
            qwekqwek
          </p>
          <br />
          <p>Web Development part... HTML CSS JS</p>
        </div>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightcoral;
  width: 100%;
  min-height: 100vh;

  .profile {
    width: 125px;
    height: 125px;
    border: 5px white solid;
    border-radius: 50%;
    margin-bottom: 2vh;
  }

  .about-container {
    color: gainsboro;
    margin: 12px;
    padding: 12px;
    background: black;
    box-shadow: 0 0 5px silver;
  }

  @media only screen and (min-width: 768px) {
    .about-container {
      color: gainsboro;
      width: 600px;
      margin: 12px;
      padding: 12px;
    }
  }
`;
