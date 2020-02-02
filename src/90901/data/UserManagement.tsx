import { Commands } from '../Grasshopper';

export const USER_MANAGEMENT: Commands = {
  title: 'User Management',
  data: [
    {
      title: `sudo`,
      command: [`cat /etc/shadow`, `sudo cat /etc/shadow`],
      info: [
        `Notice this denies permission`,
        `'sudo' gives root access and allows`,
      ],
    },
    {
      title: `su`,
      command: `su {command}`,
      info: `Run 'sudo' via other identity. Not recommended`,
    },
    {
      title: `/etc/passwd`,
      command: `cat /etc/passwd`,
      info: `List detailed information of users`,
    },
    {
      title: `/etc/shadow`,
      command: `sudo cat /etc/shadow`,
      info: `User auth storage. Requires superuser.`,
    },
    {
      title: `/etc/group`,
      command: `cat /etc/group`,
      info: `Allows different permission for different groups`,
    },
    {
      title: `Adding Users`,
      command: `sudo useradd {username}`,
      info: `Adds a new user into the system`,
    },
    {
      title: `Removing Users`,
      command: `sudo userdel {username}`,
      info: `Deletes the user from the system`,
    },
    {
      title: `Changing Password`,
      command: `sudo passwd {username}`,
      info: `Changes a user's password`,
    },
  ],
};
