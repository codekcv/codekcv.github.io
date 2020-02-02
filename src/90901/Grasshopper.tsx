import React from 'react';
import ReactDOM from 'react-dom';
import { COMMAND_LINE } from './data/CommandLine';
import { TEXT_FU } from './data/TextFu';
import { USER_MANAGEMENT } from './data/UserManagement';
import { PERMISSIONS } from './data/Permissions';
import { PROCESSES } from './data/Processes';
import { PACKAGES } from './data/Packages';
import styled, { createGlobalStyle } from 'styled-components';

export interface Commands {
  title: string;
  data: {
    title: string;
    command: string | string[];
    info: string | string[];
  }[];
}

export const Grasshopper: React.FC = () => {
  const allCommands: Commands[] = [
    COMMAND_LINE,
    TEXT_FU,
    USER_MANAGEMENT,
    PERMISSIONS,
    PROCESSES,
    PACKAGES,
  ];

  const colorizeArgument = (command: any) => {
    let build = '';
    const words: any = [];
    for (let i = 0; i < command.length; i++) {
      if (command[i] === '{') {
        // console.log('dafuq');
        for (let j = i + 1; j < command.length; j++) {
          if (command[j] === '}') {
            words.push(command.slice(i, j + 1));
            i += j - i + 2;
          }
        }
      }
    }
    // console.log('Words: ', words);
    const open: any = command
      .split('')
      .map((e: any, i: any) => (e === '{' || e === '}' ? i : ''))
      .filter(String);
    const colored: any = [];
    for (let i = 0; i < open.length; i += 2)
      colored.push(
        // <span className="coloredArg">
        command.slice(open[i], parseInt(open[i + 1]) + 1)
        // </span>
      );
    build = '';
    let counter = 0;
    const others = [];
    for (let i = 0; i < command.length; i++) {
      if (i === open[0]) {
        i += open[counter + 1] - open[counter];
        others.push(build);
        counter++;
        build = '';
      } else {
        build += command[i];
      }
    }
    if (build) others.push(build);
    // console.log(open);
    // console.log(others);
    // const split = command.split('');
    // return (
    //   <>
    //     {/* {split.map((char: any, index: any) => {
    //       return char;
    //     })} */}
    //   </>
    // );
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          <h4>
            Christian Villamin | 90/90/1 ( 2020 Q1 ) - January Deliverable
          </h4>
          <h1>Grasshopper</h1>
          <h2>
            <i>A linux journey... part one.</i>
          </h2>
        </Title>

        {allCommands.map(commands => (
          <Commands>
            <h2>{commands.title}</h2>
            {commands.data.map(({ title, command, info }, index) => (
              <Item key={index}>
                <div id="terminal">
                  <p id="command-title">{title}</p>
                </div>

                <div id="terminal-body">
                  <div id="command">
                    {typeof command === 'string' ? (
                      <TerminalLine>
                        <p id="line-command">
                          <span id="dollar">$</span> {command}
                        </p>
                        <p id="line-info">{info}</p>
                      </TerminalLine>
                    ) : (
                      command.map((item, i) => (
                        <TerminalLine key={i}>
                          <p id="line-command">
                            <span id="dollar">$</span> {item}
                          </p>
                          <p id="line-info">{info[i]}</p>
                        </TerminalLine>
                      ))
                    )}
                  </div>
                </div>
              </Item>
            ))}
          </Commands>
        ))}
      </Container>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
`;

const Container = styled.div<{}>`
  border: 1px gray solid;
  background: darkseagreen;
`;

const Title = styled.div<{}>`
  text-align: center;
  margin: 2rem;

  h4 {
    margin-bottom: 10px;
    color: #333333;
  }

  h1 {
    font-size: 12rem;
    text-shadow: 0px 7px silver;
    color: #333333;
  }

  h2 {
    color: darkslategray;
  }
`;

const Commands = styled.div<{}>`
  background: cadetblue;
  width: 1100px;
  text-align: center;
  margin: 60px auto;
  padding: 1rem;
  border-radius: 2.5rem;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 1);

  h2 {
    font-size: 4rem;
    margin: 25px 0;
    color: #333333;
  }

  #command-line {
    text-align: center;
  }

  #commands-container {
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }
`;

const Item = styled.div<{}>`
  display: inline-block;

  margin: 0.5rem;
  box-shadow: 0 4px 10px rgba(150, 170, 180, 0.5);
  border-radius: 0.5rem 0.5rem 0 0;

  #terminal {
    padding: 0.25rem;
    text-align: center;
    background: silver;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 500px;
  }

  #terminal-body {
    padding: 0.25rem;

    background-color: #272727;
  }

  #command-title {
    margin-bottom: 0.25rem;
  }

  #command {
    color: #bcdfff;
    padding: 0.25rem;

    border-bottom: 1px white dashed;
  }

  #command-info {
    background-color: #eee;
    padding: 0.25rem;
  }
`;

const TerminalLine = styled.div<{}>`
  display: flex;
  justify-content: space-between;

  #dollar {
    color: darkgray;
    margin-left: 0.25rem;
    margin-right: 0.4rem;
  }

  #line-info {
    color: rgba(0, 128, 0, 0.85);
    color: seagreen;
  }
`;
