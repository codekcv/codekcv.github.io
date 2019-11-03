import React, { useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {
  active: string;
}

export const Contact: React.FC<Props> = ({ active }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  active === 'contact'
    ? !toggle && setToggle(true)
    : toggle && setToggle(false);

  return (
    <Element name="contact">
      <Container id="contact">
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
              <input type="submit" value="Submit" className="submit" />
            </div>
          </form>
        </div>
      </Container>
    </Element>
  );
};

const Container = styled.div`
  background: mediumseagreen;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    margin-bottom: 2vh;
    color: white;
    text-shadow: 0 3px silver;
    font-size: 10vw;
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
    width: 100%;
    border: 3px skyblue solid;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 1rem;

    :hover {
      background: blue;
    }
  }

  @media only screen and (min-width: 768px) {
    .contact-container {
      max-width: 500px;
    }

    h1 {
      font-size: 5rem;
      text-shadow: 0 6px silver;
    }
  }
`;
