import { Commands } from '../Grasshopper';

export const TEXT_FU: Commands = {
  title: 'Text-Fu',
  data: [
    {
      title: `stdout (Standard Out)`,
      command: [`echo {text} > {file}`, `echo {text} >> {file}`],
      info: [`'>' redirects text to file`, `'>>' prevents overwritting`],
    },
    {
      title: `stdin (Standard In)`,
      command: `cat < {fileA} > {fileB}`,
      info: `'<' as stdin gets '>' to target`,
    },
    {
      title: `stderr (Standard Error)`,
      command: [`ls /fake/dir > {file}`, `ls /fake/dir 2> {file}`],
      info: [`Invalid, no directory`, `'2>' allows writes err message in file`],
    },
    {
      title: `pipe and tee`,
      command: [
        `ls -la /etc`,
        `ls -la /etc | less`,
        `ls -la /etc | tee {file}`,
      ],
      info: [
        `This is long and hard to read`,
        `Pipe operator to attaches command`,
        `'tee' allows different output streams`,
      ],
    },
    {
      title: `env (Environment)`,
      command: `env`,
      info: `Prints environment variables`,
    },
    {
      title: `cut`,
      command: `cut -c {n} {file}`,
      info: `Prints nth character in each lines`,
    },
    {
      title: `paste`,
      command: `paste -s {file}`,
      info: `Prints all content in one line`,
    },
    {
      title: `head`,
      command: `head {file}`,
      info: `Prints the first 10 lines of a file`,
    },
    {
      title: `tail`,
      command: `tail {file}`,
      info: `Prints the last 10 lines of a file`,
    },
    {
      title: `expand and unexpand`,
      command: [`expand {file}`, `unexpand -a {file}`],
      info: [`Converts tabs to spaces`, `Converts spaces to tabs`],
    },
    {
      title: `join and split`,
      command: [`join {fileA} {fileB}`, `splt {file}`],
      info: [
        `Combines multiple files together`,
        `Splits to new file every 1000th line`,
      ],
    },
    {
      title: `sort`,
      command: [`sort {file}`, `sort -r {file}`, `sort -n {file}`],
      info: [
        `Sort lines by a-z order`,
        `Sorts in reverse order`,
        `Sorts by numerical value`,
      ],
    },
    {
      title: `translate`,
      command: `tr [a-z] [A-Z] < {file}`,
      info: `Capitalizes all characters`,
    },
    {
      title: `uniq (Unique)`,
      command: [`uniq {file}`, `uniq -u {file}`, `uniq -d {file}`],
      info: [
        `Removes duplicate values`,
        `Gets unique values`,
        `Gets duplicate values`,
      ],
    },
    {
      title: `wc (Word Count)`,
      command: `wc {file}`,
      info: `Checks the total count of words in a file`,
    },
    {
      title: `nl (Number Lines)`,
      command: `nl {file}`,
      info: `Checks the total count of lines in a file`,
    },
    {
      title: `grep`,
      command: [`grep {value} {file}`, `grep -i {value} {file}`],
      info: [
        `Check if value exists in file`,
        `Check again but case insensitive`,
      ],
    },
  ],
};
