import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ANIMATION_DELAY } from '../components/constants';
import { isMobile } from 'react-device-detect';

interface Props {
  active: string;
  addPlace: (index: number, posY: number) => void;
}

export const About: React.FC<Props> = ({ active, addPlace }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const ref: any = useRef(null);

  useEffect(
    () =>
      addPlace(
        2,
        ref.current.getBoundingClientRect().top - (!isMobile ? 30 : 20)
      ),
    [toggle]
  );

  useEffect(() => {
    active === 'About'
      ? !toggle && setTimeout(() => setToggle(true), ANIMATION_DELAY + 125)
      : toggle && setToggle(false);
  }, [active]);

  return (
    <Container>
      <div className="notepad-container" ref={ref}>
        <Notepad anim={toggle}>
          <h1 className="title">About Me</h1>
          <p>
            I'm Christian Villamin, a self-taught web developer. I specialize in
            reactjs and its ecosystem.{' '}
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
            then have enjoyed the art of programming to heart.
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
            in 2012 to build basic desktop apps, do algorithms challenges, etc.
            In 2014, I decided to make a mobile game using the{' '}
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
            to make 3rd person games, although nothing serious, just for fun and
            messing around with my friends. I did learn maths in 3D, so that's
            nice.
          </p>
          <br />
          {/* ========================================== */}
          <h1 className="title">Learning Web Development</h1>
          <p>
            I started to learn in mid May of 2019. I had great interest in
            making my own websites ever since I entered the internet, like, it's
            so cool, your own place for the world to see. for the world to see.
            `... desc ... freeCodeCamp(Very awesome) ... comeback later ;0 ;)`
          </p>
          <br />
          {/* ========================================== */}
          <h1 className="title">Hobbies & Interests</h1>
          <p>
            I enjoy reading fantasy & mystery books. I love playing piano(
            <a
              href="https://www.youtube.com/watch?v=Cj82u5rjy3Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch me play this piece, get dem feels
            </a>
            ). I like walking outside to arrange my thoughts.. `... still
            working this section!! I wanna play Dungeons & Dragons`
          </p>
        </Notepad>
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
    border: 2px dotted solid;
  }

  @media only screen and (min-width: 768px) {
    .notepad-container {
      display: flex;
      justify-content: center;
      padding-top: 50px;
    }
  }
`;

const Notepad = styled.div<{ anim: boolean }>`
  width: 96%;
  height: 585px;
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

  @media only screen and (min-width: 768px) {
    width: 700px;
    height: 700px;
    margin: 0 30px;
    padding: 30px;
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.6);

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
