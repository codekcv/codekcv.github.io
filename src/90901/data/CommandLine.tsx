import { Commands } from '../Grasshopper';

export const COMMAND_LINE: Commands = {
  title: 'Command Line',
  data: [
    {
      title: `echo`,
      command: `echo {text}qq dq{utot} ss{3rd}`,
      info: `Prints the argument`,
    },
    {
      title: `pwd (Print Working Directory)`,
      command: `pwd`,
      info: `Prints current directory`,
    },
    {
      title: `cd (Change Directory)`,
      command: [
        `cd {absolutePath}`,
        `cd ./{relativePath}`,
        `cd ../{relativePath}`,
        `cd ~/{relativePath}`,
        `cd -/{relativePath}`,
      ],
      info: [
        `Go to the desired path`,
        `. is current directory`,
        `.. is above directory`,
        `~ is home directory`,
        `- is previous directory`,
      ],
    },
    {
      title: `ls (List Directories)`,
      command: [
        `ls`,
        `ls {path}`,
        `ls -a {path}`,
        `ls -l {path}`,
        `ls -la {path}`,
      ],
      info: [
        `Lists files and directories of current path`,
        `List files and directories of target path`,
        `List files and directories including hidden`,
        `List files and directories in detail`,
        `Combination of "ls -a" and "ls -l"`,
      ],
    },
    {
      title: `touch`,
      command: `touch {fileName}`,
      info: `Creates a new empty file`,
    },
    {
      title: `file`,
      command: `file {fileName}`,
      info: `Check file type and show content`,
    },
    {
      title: `cat (Concatenate)`,
      command: `cat {fileNameA} {fileNameB}`,
      info: `Shows contents of selected files`,
    },
    {
      title: `less`,
      command: `less {directory}`,
      info: `Displays content in a paged manner`,
    },
    {
      title: `history`,
      command: `history`,
      info: `Shows history of commands`,
    },
    {
      title: `clear`,
      command: `clear`,
      info: `Clears the terminal`,
    },
    {
      title: `cp (Copy)`,
      command: [`cp {fileName} {directory}`, `cp *.{extension} {directory}`],
      info: [
        `Copies the file to the directory`,
        `Copies all file with same extension`,
      ],
    },
    {
      title: `mv (Move)`,
      command: [`mv {file} {directory}`, `mv {oldFile} {newFile}`],
      info: [`Moves file to the directory`, `Renames the file`],
    },
    {
      title: `mkdir (Make Directory)`,
      command: `mkdir {folder1} {folder2} {...}`,
      info: `Creates directories/folders`,
    },
    {
      title: `rm (Remove)`,
      command: [`rm {fileName}`, `rmdir {directoryName}`],
      info: [`Removes a file`, `Removes a directory`],
    },
    {
      title: `find`,
      command: `find {path} {type} {fileName}`,
      info: `Finds a file in a directory`,
    },
    {
      title: `help`,
      command: `help {command}`,
      info: `Checks what the command is for and its flags`,
    },
    {
      title: `man`,
      command: `man {command}`,
      info: `Checks what the command is for and its flags`,
    },
    {
      title: `whatis`,
      command: `whatis {command}`,
      info: `Display one-line manual page descriptions`,
    },
    {
      title: `alias`,
      command: [`alias {name}='{command}'`, `unalias {name}`],
      info: [`Create an alias for commands`, 'Removes the alias'],
    },
    {
      title: `exit`,
      command: `exit`,
      info: `Exit from the shell`,
    },
  ],
};
