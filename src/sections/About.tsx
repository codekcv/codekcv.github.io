import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ANIMATION_DELAY, SCROLL_DURATION } from '../components/constants';
import { isMobile } from 'react-device-detect';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const getImages = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
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
  aboutRef: React.MutableRefObject<any>;
  vh: number;
  snap: boolean;
}

export const About: React.FC<Props> = ({ active, aboutRef, vh, snap }) => {
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

  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    active === 'About'
      ? !toggle &&
        setTimeout(
          () => setToggle(true),
          ANIMATION_DELAY + (!isMobile ? 125 : 0)
        )
      : toggle && setTimeout(() => setToggle(false), 0);
  }, [active]);

  return (
    <Container>
      <div className="notepad-container" ref={aboutRef}>
        <Notepad anim={toggle} snap={snap && active === 'About'} vh={vh}>
          <h1 className="title">About Me</h1>
          <p>
            I'm Christian Villamin, a web developer. I specialize in ReactJS &
            NodeJS. I love JavaScript, open source, and learning new things.
          </p>
          <br />

          {/* ========================================== */}
          <h1 className="title">Programming History</h1>
          <p>
            I started programming in 2007 when I was 11, using{' '}
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
            to make modifications and create custom maps in{' '}
            <a
              href="https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warcraft III
            </a>
            . I learned it by reading guides & documentations online, and since
            then have enjoyed the art of programming to heart. I made tower
            defense games, battle arenas, hero campaign maps, etc. with it and
            played it with my local and online friends.
          </p>
          <br />
          <p>
            After that, I learned to program{' '}
            <a
              href="https://en.wikipedia.org/wiki/Java_(programming_language)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java
            </a>{' '}
            in 2012 to build basic desktop app. In 2013, I joined a programming
            competition that deals with solving algorithms and{' '}
            <a
              href="https://christianvillamin.github.io/competition.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              I won
            </a>
            . In 2014, I decided to make a mobile game using the{' '}
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
            . I made a 2D platform pixel-art running game. In 2016, I decided to
            learn{' '}
            <a
              href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
              target="_blank"
              rel="noopener noreferrer"
            >
              C#
            </a>{' '}
            & the basics of{' '}
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
            to make 1st person games, although nothing serious, just for fun and
            messing around with my friends. I did learn maths in 3D, so that's
            nice. This year, 2019, I'm stepping in for good in the wonderful
            world of web development and beyond.
          </p>
          <br />

          {/* ========================================== */}
          <h1 className="title">Hobbies & Interests</h1>
          <p>
            I enjoy reading fantasy & mystery books. I'm learning & playing
            piano(
            <a
              href="https://www.youtube.com/watch?v=Cj82u5rjy3Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              feels play 🙊
            </a>
            |
            <a
              href="https://www.youtube.com/watch?v=kriH9XzPF4Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              blindfold play 🙈
            </a>
            ). I like walking around outside to arrange my thoughts. I drink
            your average joe coffee everyday. I want to play Dungeons & Dragons.
            I'm very interested to learn AI/Machine Learning when I get time. I
            love Silicon Valley, the actual place and the TV show. I don't play
            any computer games anymore.
          </p>

          <div className="images">
            <div className="img img1">
              <Img fluid={images[0]} />
            </div>
            {!isMobile && (
              <>
                <div className="img img3">
                  <Img fluid={images[2]} />
                </div>
                <div className="img img2">
                  <Img fluid={images[1]} />
                </div>
              </>
            )}
          </div>
        </Notepad>
        {!isMobile && (
          <Notepad anim={toggle} snap={snap && active === 'About'} vh={vh}>
            <h1 className="title">Web Development Journey</h1>
            <p>
              I have a keen interest in doing web development. Looking to learn,
              I found{' '}
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                freeCodeCamp
              </a>
              . I finished its curriculum that has an estimated course work of
              1800 hours. I solved 800+ challenges and built a total of 30
              projects of my own work, passing all unit testing, and submitted
              to get my certifications. All in the span of{' '}
              <a
                href="https://www.freecodecamp.org/christianvillamin"
                target="_blank"
                rel="noopener noreferrer"
              >
                3 months
              </a>
              .
            </p>
            <br />

            <ul>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/christianvillamin/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Responsive Web Design Certification
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/christianvillamin/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript Algorithms and Data Structures Certification
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/christianvillamin/front-end-libraries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Front End Libraries Certification
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/christianvillamin/data-visualization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Visualization Certification
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/christianvillamin/apis-and-microservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APIs and Microservices Certification
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/christianvillamin/information-security-and-quality-assurance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Information Security and Quality Assurance Certification
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/christianvillamin/full-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Stack Certification
                </a>
              </li>
            </ul>
            <br />
            <p>
              Having programming background, learning JavaScript(ES6+/Algos/DOM
              Manipulations) was a breeze. Meanwhile, HTML5 & CSS3 are much
              easier languages to learn from having that standpoint.
            </p>
            <br />
            <p>
              After that, I focused my learning on the latest and greatest web
              technologies;{' '}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReactJS
              </a>{' '}
              for the client-side, and{' '}
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NodeJS
              </a>{' '}
              for the server-side. From there, the skills expanded to an
              environment surrounding those two primary technologies. I'm strong
              in MERN stack.
            </p>
            <br />
            <p>
              I created a{' '}
              <a
                href="https://twitter.com/villamin_c"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{' '}
              &{' '}
              <a
                href="https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>{' '}
              account as a documentation tool for my progress. Joining the{' '}
              <a
                href="https://www.100daysofcode.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                100DaysOfCode
              </a>{' '}
              challenge has been a huge help to my learning, as I was able to
              relate, help, and share thoughts to many people who are also
              learning web development.
            </p>
          </Notepad>
        )}
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;

  .notepad-container {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  @media only screen and (min-width: 768px) {
    .notepad-container {
      display: flex;
      justify-content: center;
      padding-top: 50px;
    }
  }
`;

const Notepad = styled.div<{ anim: boolean; snap: boolean; vh: number }>`
  position: relative;
  width: 96%;
  height: ${props => (props.snap ? props.vh - 60 + 'px' : '585px')};
  background: #f5f5f5;
  box-shadow: 0 0 30px -10px rgba(150, 170, 180, 1);
  transition: 0.5s ease;
  transform: ${props => (props.anim ? 0 : 'translateY(100%)')};
  padding: 0.4rem;

  .title,
  p,
  li,
  a {
    font-family: monospace;
  }

  .title {
    text-indent: 0.9rem;
    font-size: 0.9rem;
  }

  p {
    font-size: 0.7rem;
  }

  li {
    margin-left: 2rem;
  }

  @media only screen and (min-width: 768px) {
    width: 700px;
    height: 700px;
    margin: 0 30px;
    padding: 30px;
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.6);

    .images {
      position: absolute;
      top: 0;
      left: 50%;
      /* border: 2px cyan solid; */
      width: 64px;
      height: 64px;

      animation: about 4s ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      @keyframes about {
        from {
          transform: translateX(-30%);
        }

        to {
          transform: translateX(-70%);
        }
      }
    }

    .img {
      position: absolute;
      transform: translateX(-50%);
      width: 300px;
      height: 300px;
    }

    .img1 {
      transition: 1.5s ease-out;
      left: -450px;
      top: ${props => (props.anim ? '300px' : '350px')};
      opacity: ${props => (props.anim ? '0.55' : '0')};
    }

    .img2 {
      transition: 1.5s ease-out;
      left: 520px;
      top: ${props => (props.anim ? 0 : '150px')};
      opacity: ${props => (props.anim ? '0.4' : '0')};
    }

    .img3 {
      transition: 1.5s ease-in-out;
      top: ${props => (props.anim ? '-250px' : '-150px')};
      opacity: ${props => (props.anim ? '0.55' : '0')};
    }

    .title {
      text-indent: 1rem;
      font-size: 1.5rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

/*
<div className="all-abouts" ref={ref}>
        <div className="about-container">
          <p>
            I'm Christian Villamin, a web developer specializing in ReactJS and
            its environment.
          </p>
          <ul>
            <li>I love learning new things and I learn fast.</li>
            <li>I'm flexible and adapt to environments fast</li>
            <li>I'm always on my programming game, I code clean and fast.</li>
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
            . I learned it through self learning and my love for their game, and
            since then have enjoyed the art of programming to heart. With it, I
            made games such as Hero Arena(Now as MOBA), Tower Defense, Campaign
            Adventures, and many more where I played it with my local and online
            friends.
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
            <li>Playing the piano.</li>
            <li>Reading fantasy books.</li>
            <li>Helping people.</li>
          </ul>
          <br />
          <p>Things I want to do someday</p>
          <ul>
            <li>AI & Machine Learning</li>
            <li>Dungeons & Dragons</li>
            <li>Godot Engine & GDScript</li>
            <li>YT & Make Tutorials</li>
          </ul>
        </div>
      </div>

*/
