import React, { useState } from 'react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import { isMobile } from 'react-device-detect';
import {
  FaTwitter,
  FaYoutube,
  FaFreeCodeCamp,
  FaEnvelope,
  FaCodepen,
  FaGithub,
} from 'react-icons/fa';

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

  const iconSize = isMobile ? 36 : 48;

  const links = [
    {
      name: 'GitHub',
      icon: <FaGithub size={iconSize} />,
      url: 'https://github.com/ChristianVillamin',
    },
    {
      name: 'CodePen',
      icon: <FaCodepen size={iconSize} />,
      url: 'https://codepen.io/ChristianVillamin',
    },
    {
      name: 'freeCodeCamp',
      icon: <FaFreeCodeCamp size={iconSize} />,
      url: 'https://www.freecodecamp.org/christianvillamin',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={iconSize} />,
      url: 'https://twitter.com/villamin_c',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube size={iconSize} />,
      url: 'https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg',
    },
    {
      name: 'ChristianVillamin31@gmail.com',
      icon: <FaEnvelope size={iconSize} />,
      url: '',
    },
  ];

  return (
    <Element name="home">
      <BackgroundImage fluid={backgroundImage}>
        <Container id="home" anim={toggle}>
          <Img className="profile" fluid={profileImage} />
          <div className="information">
            <h1>Christian Villamin</h1>
            <h2>{`I create web sites & web applications.`}</h2>

            <div className="icons">
              {links.map(link => (
                <div className="wrapper">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className="icon">{link.icon}</div>
                  </a>
                  <p className="name">{link.name}</p>
                </div>
              ))}
            </div>
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

    transition: ${props => (props.anim ? '1s' : '0s')} ease;
    transition-delay: ${props => (props.anim ? '180ms' : '300ms')};
    transform: ${props => (props.anim ? 0 : `translateY(50px)`)};
    opacity: ${props => (props.anim ? 1 : 0)};

    h1 {
      font-size: 2rem;
      text-shadow: 2px 2px darkslategray;
    }

    h2 {
      font-size: 1rem;
      font-weight: 300;
      color: gainsboro;
      text-shadow: 2px 2px darkslategray;

      padding: 3px 8px;
      border: 1px dashed gray;
      border-radius: 8px;

      background: rgba(0, 0, 0, 0.75);
    }

    .icons {
      display: flex;
      justify-content: space-evenly;
      margin-top: 15px;

      .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        margin: 0 1vw;

        .icon {
          transition: 0.2s ease;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.75);
          padding: 5px;
          color: white;
        }

        p {
          transition: 0.2s ease;
          position: absolute;
          opacity: 0;
          top: 45px;
        }

        :hover {
          .icon {
            transform: scale(1.15);
            color: white;
          }

          p {
            opacity: 1;
            top: 60px;
          }
        }
      }
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

      .icons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 15px;

        .wrapper {
          margin: 0 1vw;

          .icon {
            padding: 10px;
          }

          p {
            transition: 0.2s ease;
            position: absolute;
            opacity: 0;
            top: 50px;
          }

          :hover {
            .icon {
              transform: scale(1.25);
              color: white;
            }

            p {
              opacity: 1;
              top: 85px;
            }
          }
        }
      }
    }
  }
`;
