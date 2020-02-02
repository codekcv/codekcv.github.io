import React, { memo } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import {
  FaGithub,
  FaCodepen,
  FaFreeCodeCamp,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const links = [
  {
    name: 'GitHub',
    icon: <FaGithub className="fa" />,
    url: 'https://github.com/crxnvlmn',
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
    name: 'YouTube',
    icon: <FaYoutube className="fa" />,
    url: 'https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg',
    color: '#c4302b',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn className="fa" />,
    url: 'https://www.linkedin.com/in/crxnvlmn/',
    color: '#0e76a8 ',
  },

  {
    name: 'Twitter',
    icon: <FaTwitter className="fa" />,
    url: 'https://twitter.com/crxnvlmn',
    color: '#00acee',
  },
];

const getImages = graphql`
  query {
    profile: file(relativePath: { eq: "home/profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    scroll: file(relativePath: { eq: "home/scroll.png" }) {
      childImageSharp {
        fixed(height: 60) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

interface Props {
  homeRef: React.MutableRefObject<any>;
  measures: any;
}

export const Home: React.FC<Props> = memo(({ homeRef, measures }) => {
  const {
    profile: {
      childImageSharp: { fluid: profileImage },
    },
    scroll: {
      childImageSharp: { fixed: scrollImage },
    },
  } = useStaticQuery(getImages);

  return (
    <Container id="home" isMobile={measures.isMobile}>
      <div id="placer">
        <div id="card">
          <Img className="profile" fluid={profileImage} loading={`eager`} />
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
          <div className="indicator-container">
            {measures.isMobile ? (
              <div className="swipe-container">
                <p>&lt; Swipe &gt;</p>
              </div>
            ) : (
              <div className="scroll-container">
                <p>Scroll</p>
                <div style={{ width: '58px' }}>
                  <Img fixed={scrollImage} loading={`eager`} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
});

const Container = styled.section<{ isMobile: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;

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
          top: 110px;
        }

        h2 {
          margin-top: 120px;
          font-size: 1rem;
          font-weight: 300;
          color: gainsboro;
          /* text-shadow: 2px 2px darkslategray; */
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

      .indicator-container {
        width: 100%;
        height: auto;
        margin-top: 30px;

        .swipe-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .ios-warn {
            border: 1px pink solid;
            width: 100%;
            text-align: center;

            p {
              font-size: 0.8rem;
            }
          }
        }

        .scroll-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 90px;
        }

        animation: anim 2s ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        @keyframes anim {
          0% {
            transform: ${props => props.isMobile && 'translateX(-5%)'};
            opacity: 0.2;
          }

          50% {
            opacity: 0.6;
          }

          100% {
            transform: ${props => props.isMobile && 'translateX(5%)'};
            opacity: 0.2;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    #placer {
      #card {
        width: 700px;

        .profile {
          width: 200px;
          height: 200px;
        }

        .information {
          padding: 50px 50px 25px 50px;
          margin-top: -100px;
          border-radius: 60px;

          .flying-text {
            top: 100px;
          }

          h2 {
            margin-top: 120px;
            font-size: 2rem;
            /* text-shadow: 2px 4px darkslategray; */
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1600px) {
    #placer {
      #card {
        width: 900px;

        .profile {
          width: 300px;
          height: 300px;
        }

        .information {
          padding: 50px 50px 25px 50px;
          margin-top: -150px;
          border-radius: 60px;

          .flying-text {
            top: 165px;
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

interface Ic {
  color: string;
}

const Icon = styled.div<Ic>(
  props => `
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
        color: ${props.color};
      }

      .name {
        opacity: 1;
        top: 70px;
      }
    }
  }
`
);
