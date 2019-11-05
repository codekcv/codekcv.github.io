import React, { useState, useRef } from 'react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import {
  FaTwitter,
  FaYoutube,
  FaFreeCodeCamp,
  FaCodepen,
  FaGithub,
} from 'react-icons/fa';
import { ANIMATION_DELAY, SCROLL_DURATION } from '../components/constants';

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

  const links = [
    {
      name: 'GitHub',
      icon: <FaGithub className="fa" />,
      url: 'https://github.com/ChristianVillamin',
      color: 'white',
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

  return (
    <BackgroundImage fluid={backgroundImage}>
      <Container id="home" anim={toggle}>
        <Img className="profile" fluid={profileImage} />
        <div className="information">
          <h1>Christian Villamin</h1>
          <h2>{`I create web sites & web applications.`}</h2>

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
      </Container>
    </BackgroundImage>
  );
};

const Container = styled.section<{ anim: boolean }>`
  background: rgba(0, 0, 0, 0.65);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 200;

  .profile {
    position: absolute;
    left: 0;
    top: 0;
    width: 175px;
    height: 175px;
    margin-bottom: 2vh;
    border: 3px white solid;
    border-radius: 50%;
  }

  .information {
    color: white;
    text-align: center;
    transition: ${props => (props.anim ? '1s' : '0s')} ease;
    transition-delay: ${props =>
      props.anim ? ANIMATION_DELAY + 'ms' : SCROLL_DURATION - 10 + 'ms'};
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
      margin-top: 5px;
    }
  }

  @media only screen and (min-width: 768px) {
    .profile {
      width: 300px;
      height: 300px;
      border: 5px white solid;
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
        padding: 3px 8px 5px 8px;
      }

      .icons {
        margin-top: 10px;
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
        transform: scale(1.25);
        color: ${props => props.color};
      }

      .name {
        opacity: 1;
        top: 80px;
      }
    }
  }
`;
