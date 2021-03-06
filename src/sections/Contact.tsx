import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  contactRef: React.MutableRefObject<any>;
  measures: any;
  active: string;
}

export const Contact: React.FC<Props> = ({ contactRef, measures, active }) => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    active === 'Contact'
      ? !toggle && setTimeout(() => setToggle(true), measures.ANIMATION_DELAY)
      : toggle && setTimeout(() => setToggle(false), measures.SCROLL_DURATION);
  }, [active]);

  return (
    <Container id="contact" anim={toggle}>
      <div className="outer" ref={contactRef}>
        <div className="contact-container">
          <form
            action="https://formspree.io/ChristianVillamin31@gmail.com"
            method="POST"
          >
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className="input"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                className="input"
                type="input"
                name="_subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                rows={10}
                className="input"
                placeholder="Message"
                required
              />
            </div>
            <div className="submit-container">
              <input type="submit" value="Submit" className="submit" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ anim: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  transition: ${props => (props.anim ? '0.75s' : 0)} ease;
  transform: ${props => (props.anim ? `scale(1)` : `scale(1.25)`)};
  opacity: ${props => (props.anim ? 1 : 0)};

  .outer {
    display: flex;
    justify-content: center;
    width: 100%;

    .contact-container {
      position: relative;
      width: 80%;
      padding: 8px;
      box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 1);
      border-radius: 6px;

      .input {
        display: block;
        padding: 6px;
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
        background: white;
        width: 100%;
        border: 1px skyblue solid;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 1rem;
        transition: 0.25s ease;

        :hover {
          background: lightskyblue;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .outer {
      margin-top: 100px;
      padding-top: 25px;

      .contact-container {
        max-width: 600px;
        padding: 16px;
        box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
      }
    }
  }
`;
