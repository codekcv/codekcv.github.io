import React, { useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

interface Props {
  active: string;
}

export const Contact: React.FC<Props> = ({ active }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    delay: toggle ? 250 : 0,
    duration: 5000,
  });

  active === 'contact'
    ? !toggle && setToggle(true)
    : toggle && setToggle(false);

  return (
    <Element name="contact">
      <Container id="contact">
        <animated.div className="anim-container" style={props}>
          <h1>Contact Me</h1>
          <div className="contact-container">
            <form
              action="https://formspree.io/mabaetbaet@gmail.com"
              method="POST"
            >
              <div>
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  className="input"
                  required
                />
              </div>
              <div className="submit-container">
                <input type="submit" value="submit here" className="submit" />
              </div>
            </form>
          </div>
        </animated.div>
      </Container>
    </Element>
  );
};

const Container = styled.div`
  background: mediumseagreen;

  .anim-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  h1 {
    margin-bottom: 2vh;
    color: white;
  }

  .contact-container {
    background: white;
    width: 80%;
    padding: 16px;
    box-shadow: 0 0 5px gray;
    border-radius: 6px;
  }

  label {
    padding-left: 4px;
  }

  .input {
    display: block;
    margin: 2px;
    padding: 2px;
    border: 1px lightgray solid;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 12px;

    :hover {
      border: 1px gray solid;
    }
  }

  textarea {
    resize: none;
  }

  .submit {
    background: lightskyblue;
    border: 3px skyblue solid;
    padding: 8px 16px;
    border-radius: 6px;

    text-shadow: 0 1px white;

    :hover {
      background: lightskyblue;
    }
  }

  @media only screen and (min-width: 768px) {
    .contact-container {
      max-width: 500px;
    }
  }
`;
