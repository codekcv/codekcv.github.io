import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { SCROLL_DURATION } from '../components/constants';
import { isMobile } from 'react-device-detect';
import {
  FaTwitter,
  FaYoutube,
  FaFreeCodeCamp,
  FaCodepen,
  FaGithub,
  FaLinkedinIn,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';

const links = [
  {
    name: 'GitHub',
    icon: <FaGithub className="fa" />,
    url: 'https://github.com/ChristianVillamin',
    color: 'black',
  },
  {
    name: 'CodePen',
    icon: <FaCodepen className="fa" />,
    url: 'https://codepen.io/ChristianVillamin',
    color: 'gray',
  },
  {
    name: 'freeCodeCamp',
    icon: <FaFreeCodeCamp className="fa" />,
    url: 'https://www.freecodecamp.org/christianvillamin',
    color: 'green',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn className="fa" />,
    url: 'https://www.linkedin.com/in/christian-villamin-907272188/',
    color: '#0e76a8 ',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube className="fa" />,
    url: 'https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg',
    color: '#c4302b',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="fa" />,
    url: 'https://twitter.com/villamin_c',
    color: '#00acee',
  },
];

const getImages = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "home" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 600) {
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
  homeRef: React.MutableRefObject<any>;
}

export const Home: React.FC<Props> = ({ active, homeRef }) => {
  const {
    allFile: { edges },
  } = useStaticQuery(getImages);

  const images = edges.map(
    ({
      node: {
        childImageSharp: { fluid },
      },
    }: any) => fluid
  );

  const scrollImage = images[0];
  const profileImage = images[1];

  return (
    <Container id="home">
      <div id="placer">
        <div id="card">
          <Img className="profile" fluid={profileImage} />
          <div className="information">
            <div className="flying-text" ref={homeRef} />
            <h2>{`I build web sites & web applications.`}</h2>
            <div className="icons">
              {links.map(link => (
                <Icon key={link.name} color={link.color}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className="icon">{link.icon}</div>
                  </a>
                  <p className="name">{link.name}</p>
                </Icon>
              ))}
            </div>
          </div>
          <div className="scroll-container">
            {isMobile ? (
              <>
                <FaAngleLeft />
                <span className="swipe">Swipe</span>
                <FaAngleRight />
              </>
            ) : (
              <>
                <p>Scroll</p>
                <Img className="scroll-img" fluid={scrollImage} />
              </>
            )}
          </div>
        </div>
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

  #placer {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;

    #card {
      width: 90%;

      .profile {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 180px;
        height: 180px;
        border: 5px dashed white;
        box-shadow: 0 0 5px dimgray;
        border-radius: 50%;
      }

      .information {
        /* background: mediumaquamarine; */
        /* background: mediumslateblue; */
        background: CadetBlue;
        color: white;
        text-align: center;

        padding: 25px 15px 15px 15px;
        margin-top: -90px;
        border-radius: 30px;

        border: 5px dashed white;
        box-shadow: 0 0 5px dimgray;

        .flying-text {
          position: relative;
          top: 120px;
        }

        h2 {
          margin-top: 120px;
          font-size: 1rem;
          font-weight: 300;
          color: gainsboro;
          text-shadow: 2px 2px darkslategray;
          padding: 3px 8px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.25);
          width: 100%;
        }

        .icons {
          display: flex;
          justify-content: space-evenly;
          margin-top: 15px;
        }
      }
    }
  }

  .scroll-container {
    position: relative;
    left: 50%;
    width: 80px;
    margin-top: 30px;
    transform: translateX(-50%);
    height: 64px;
    text-align: center;
    opacity: 0.5;

    .swipe {
      position: relative;
      top: -3px;
    }

    animation: anim 2s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes anim {
      0% {
        transform: ${isMobile && 'translateX(-40%)'};
        opacity: 0.2;
      }

      50% {
        opacity: 0.6;
      }

      100% {
        transform: ${isMobile && 'translateX(-60%)'};
        opacity: 0.2;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    #placer {
      #card {
        width: 900px;

        .profile {
          width: 300px;
          height: 300px;
          border: 5px dashed white;
        }

        .information {
          padding: 50px 50px 25px 50px;
          margin-top: -150px;
          border: 5px dashed white;
          border-radius: 60px;

          .flying-text {
            top: 175px;
          }

          h2 {
            margin-top: 200px;
            font-size: 2rem;
            text-shadow: 2px 4px darkslategray;
          }
        }
      }
    }
  }
`;

const Icon = styled.div<{ color: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 1vw;

  .icon {
    color: white;

    .fa {
      width: 32px;
      height: 32px;
    }
  }

  .name {
    position: absolute;
    opacity: 0;
    top: 45px;
  }

  @media only screen and (min-width: 768px) {
    .icon {
      transition: 0.2s ease;
      padding: 10px;

      .fa {
        width: 54px;
        height: 54px;
      }
    }

    .name {
      transition: 0.2s ease;
    }

    :hover {
      .icon {
        transform: scale(1.2);
        color: ${props => props.color};
      }

      .name {
        opacity: 1;
        top: 70px;
      }
    }
  }
`;
