import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ANIMATION_DELAY } from '../components/constants';

interface Props {
  active: string;
  addPlace: (index: number, posY: number) => void;
}

export const Contact: React.FC<Props> = ({ active, addPlace }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  active === 'contact'
    ? !toggle && setToggle(true)
    : toggle && setToggle(false);

  const ref: any = useRef(null);

  useEffect(() => {
    addPlace(4, ref.current.getBoundingClientRect().top);
  }, [toggle]);

  return (
    <Container id="contact" anim={toggle}>
      <div className="outer" ref={ref}>
        <div className="contact-container">
          <form
            action="https://formspree.io/mabaetbaet@gmail.com"
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

  .outer {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    padding-top: 50px;

    width: 100%;

    .contact-container {
      position: relative;
      width: 80%;
      padding: 16px;
      box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.6);
      border-radius: 6px;

      label {
        padding-left: 4px;
      }

      .input {
        display: block;
        margin: 2px;
        padding: 12px;
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

  @media only screen and (max-height: 660px) {
    margin-top: 8vh;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 768px) {
    .contact-container {
      max-width: 600px;
    }

    h1 {
      font-size: 8vw;
      text-shadow: 0 6px silver;
    }
  }
`;
