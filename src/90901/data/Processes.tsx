import { Commands } from '../Grasshopper';

export const PROCESSES: Commands = {
  title: 'Processes',
  data: [
    {
      title: `ps (Processes)`,
      command: [`ps`, `ps l`, `ps aux`],
      info: [
        `Shows the current processes`,
        `Current processes in long format`,
        `Current processes in detal`,
      ],
    },
    {
      title: `top`,
      command: `top`,
      info: `Shows real time information`,
    },
    {
      title: `kill (Terminate)`,
      command: `kill {processID}`,
      info: `Sets owner of file to user`,
    },
    {
      title: `Niceness`,
      command: `nice -n {val} apt upgrade`,
      info: `Sets priority value for new processes`,
    },
    {
      title: `Renicing`,
      command: `renice {val} -p {processID}`,
      info: `Set priority for existing processes`,
    },
    {
      title: `/proc filesystem`,
      command: `cat /proc/{processID}/status`,
      info: `Check process state information`,
    },
    {
      title: `Job Control`,
      command: `sleep {processID} &`,
      info: `Allow process to run in background`,
    },
    {
      title: `Background Jobs`,
      command: `jobs`,
      info: `Views all running jobs`,
    },
    {
      title: `Background to Foreground`,
      command: [`fg`, `fg %{jobId}`],
      info: [`Switch to FG most recent job`, `Switch to FG selected job`],
    },
    {
      title: `Kill Background Jobs`,
      command: [`kill %1`, `kill $(jobs -p)`],
      info: [`Terminate selected job`, `Terminate all jobs`],
    },
  ],
};
