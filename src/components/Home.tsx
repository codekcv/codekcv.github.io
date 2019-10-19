import React, { useState, useEffect } from 'react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

interface Props {}

const getImages = graphql`
  query {
    background: file(relativePath: { eq: "codes.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export const Home: React.FC<Props> = () => {
  const data = useStaticQuery(getImages);
  const backgroundImage = data.background.childImageSharp.fluid;
  const profileImage = data.profile.childImageSharp.fluid;

  return (
    <Element name="home">
      <BackgroundImage fluid={backgroundImage}>
        <Container id="home">
          <Img className="profile" fluid={profileImage} />
          <div className="information">
            <h1>Christian Villamin</h1>
            <h2>{`I create web sites & web applications.`}</h2>
          </div>
        </Container>
      </BackgroundImage>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;

  .profile {
    width: 175px;
    height: 175px;
    margin-bottom: 2vh;
    border: 5px white solid;
    border-radius: 50%;
  }

  .information {
    color: white;
    text-align: center;
    text-shadow: 2px 2px darkslategray;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 300;
      color: gainsboro;

      padding: 3px 8px;
      border: 1px dashed gray;
      border-radius: 8px;

      background: rgba(0, 0, 0, 0.75);
    }
  }

  @media only screen and (min-width: 768px) {
    .profile {
      width: 300px;
      height: 300px;
    }

    .information {
      color: white;
      text-align: center;
      text-shadow: 2px 2px darkslategray;

      h1 {
        font-size: 5rem;
      }

      h2 {
        font-size: 2rem;
      }
    }
  }
`;
