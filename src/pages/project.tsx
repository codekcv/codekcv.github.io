import React from 'react';
import { Link } from 'gatsby';

const Project = () => {
  return (
    <>
      <h1>About Me</h1>
      <p>I'm currently learning web development.</p>
      <p>
        Go to <Link to="/">Home</Link>.
      </p>
      <h2>Testing if routes work in GH pages</h2>
      <ul>
        <li>Anonymouse Message Board</li>
        <li>Stock Price Checker</li>
      </ul>
    </>
  );
};

export default Project;
