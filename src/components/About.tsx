import React, { useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useSpring, animated } from 'react-spring';

const getProfile = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

interface Props {
  active: string;
}

export const About: React.FC<Props> = ({ active }) => {
  const {
    profile: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getProfile);

  const [toggle, setToggle] = useState<boolean>(false);
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    delay: toggle ? 250 : 0,
  });

  active === 'about' ? !toggle && setToggle(true) : toggle && setToggle(false);

  return (
    <Element name="about">
      <Container id="about">
        <animated.div className="anim-container" style={props}>
          <div className="profile-container">
            {/* <Img className="profile" fluid={fluid} /> */}
          </div>
          <div className="all-abouts">
            <div className="about-container">
              <h2>About Me</h2>
              <p>
                I'm Christian Villamin, a web developer specializing in ReactJS
                and its environment.
              </p>
              <ul>
                <li>I love learning new things and I learn fast.</li>
                <li>I'm flexible and adapt to environments fast</li>
                <li>
                  I'm always on my programming game, I code clean and fast.
                </li>
              </ul>
              <br />
              <h2>Programming History</h2>
              <p>
                I have started programming back in 2007 when I was 11, using{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Blizzard_Entertainment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blizzard
                </a>
                's event-driven scripting language called{' '}
                <a
                  href="https://en.wikipedia.org/wiki/JASS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JASS
                </a>{' '}
                to make modifications and create custom maps for their game,{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Warcraft III
                </a>
                . I learned it through self learning and my love for their game,
                and since then have enjoyed the art of programming to heart.
                With it, I made games such as Hero Arena(Now as MOBA), Tower
                Defense, Campaign Adventures, and many more where I played it
                with my local and online friends.
              </p>
              <br />
              <p>
                After that, I learned to program in Java to make my own Android
                mobile game using the{' '}
                <a
                  href="https://developer.android.com/studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Android Studio
                </a>{' '}
                IDE and an awesome library called{' '}
                <a
                  href="https://libgdx.badlogicgames.com/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  libGDX
                </a>
                . I made a 2D platform pixel-art running game. A year later, I
                decided to learn C# &{' '}
                <a
                  href="https://www.blender.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blender
                </a>
                , and moved to{' '}
                <a
                  href="https://unity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unity3D
                </a>{' '}
                to step-up the game.
              </p>
              <br />
            </div>

            <div className="about-container">
              <h2>Web Development</h2>
              <p>`...description...`</p>
              <br />
              <h2>Hobbies & Interests</h2>
              <p>Things I love (other than programming)</p>
              <ul>
                <li>Playing my digital piano.</li>
                <li>Reading fiction and self-help books.</li>
                <li>Walking outside to think.</li>
              </ul>
              <br />
              <p>Things I want to learn sometime</p>
              <ul>
                <li>AI & Machine Learning</li>
                <li>Dungeons & Dragons</li>
                <li>Godot Game Engine</li>
              </ul>
            </div>
          </div>
        </animated.div>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  background: lightcoral;

  .anim-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

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
    border: 1px silver solid;
    /* box-shadow: 0 0 5px silver; */

    h2 {
      font-size: 6vw;
    }

    p {
      font-size: 3vw;
    }

    ul {
      margin-left: 24px;
      font-size: 3vw;
    }
  }

  @media only screen and (min-width: 768px) {
    .all-abouts {
      display: flex;
    }

    .about-container {
      color: gainsboro;
      width: 600px;
      margin: 12px;
      padding: 12px;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      ul {
        margin-left: 24px;
        font-size: 1rem;
      }
    }
  }
`;
