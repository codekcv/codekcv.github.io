import React, { useState, useEffect } from 'react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  active: string;
}

const getImages = graphql`
  query {
    background: file(relativePath: { eq: "codes.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1080) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export const Home: React.FC<Props> = ({ active }) => {
  const {
    background: {
      childImageSharp: { fluid: backgroundImage },
    },
    profile: {
      childImageSharp: { fluid: profileImage },
    },
  } = useStaticQuery(getImages);

  const [toggle, setToggle] = useState<boolean>(true);

  active === 'home' ? !toggle && setToggle(true) : toggle && setToggle(false);

  return (
    <Element name="home">
      <BackgroundImage fluid={backgroundImage}>
        <Container id="home" anim={toggle}>
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

const Container = styled.section<{ anim: boolean }>`
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .profile {
    position: absolute;
    left: 0;
    top: 0;
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

    transition: ${props => (props.anim ? '1s' : '0s')} ease;
    transition-delay: ${props => (props.anim ? '180ms' : '300ms')};
    transform: ${props => (props.anim ? 0 : `translateY(200px)`)};
    opacity: ${props => (props.anim ? 1 : 0)};

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

      h1 {
        font-size: 5rem;
        text-shadow: none;
      }

      h2 {
        font-size: 2rem;
        text-shadow: 2px 4px darkslategray;
      }
    }
  }
`;
