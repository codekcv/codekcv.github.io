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

  // const [name, setName] = ()

  return (
    <Container id="contact" anim={toggle}>
      <div className="contact-container" ref={ref}>
        <form action="https://formspree.io/mabaetbaet@gmail.com" method="POST">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder="Name"
              // value={name}
              // onChange=
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
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Subject</label>
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

  .contact-container {
    position: relative;
    width: 80%;
    padding: 16px;
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.6);
    border-radius: 6px;

    /* transition: ${props => (props.anim ? '0.5s' : '0.5s')} ease;
    transition-delay: ${props => (props.anim ? ANIMATION_DELAY + 'ms' : '0ms')};
    opacity: ${props => (props.anim ? `1` : `0`)}; */

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
      background: lightskyblue;
      width: 100%;
      border: 3px skyblue solid;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 1rem;

      :hover {
        background: blue;
      }
    }
  }

  @media only screen and (max-height: 660px) {
    margin-top: 8vh;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 768px) {
    border: 5px black solid;
    
    .contact-container {
      max-width: 600px;
      margin-top: 100px;
    }

    h1 {
      font-size: 8vw;
      text-shadow: 0 6px silver;
    }
  }
`;
