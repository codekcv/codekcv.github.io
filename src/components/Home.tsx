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
  const {
    background: {
      childImageSharp: { fluid: backgroundImage },
    },
  } = useStaticQuery(getImages);

  const {
    profile: {
      childImageSharp: { fluid: profileImage },
    },
  } = useStaticQuery(getImages);

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
  height: 100vh;

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
      font-weight: 100;
      color: lightgray;
    }
  }
`;
