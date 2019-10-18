import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Element } from 'react-scroll';

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

    profile: file(relativePath: { eq: "profile.png" }) {
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
            <h2>{`I create web site & web applications`}</h2>
          </div>
        </Container>
      </BackgroundImage>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;

  color: white;

  .profile {
    width: 300px;
    height: 300px;
    border: 5px white solid;
    border-radius: 50%;
  }

  .information {
    margin-left: 30px;

    h1 {
      font-size: 4rem;
      text-shadow: 2px 2px darkslategray;
    }

    h2 {
      font-weight: 300;
      color: gainsboro;

      padding: 3px 8px;
      border: 1px solid gray;
      border-radius: 8px;
    }
  }

  @media screen and (min-width: 320px) {
    flex-direction: column;

    .profile {
      width: 175px;
      height: 175px;
    }

    .information {
      margin-left: 0;
      /* border: 1px pink solid; */
      text-align: center;

      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
`;
