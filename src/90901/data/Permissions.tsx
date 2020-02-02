import { Commands } from '../Grasshopper';

export const PERMISSIONS: Commands = {
  title: 'Permissions',
  data: [
    {
      title: `chmod (Modifying Permissions)`,
      command: [`chmod u+x {file}`, `chmod u-x {file}`],
      info: [
        `Adds executable permission for user`,
        `Removes executable permission for user`,
      ],
    },
    {
      title: `chmod (Multiple Permissions)`,
      command: `chmod ug+w {file}`,
      info: `Adds multiple permission for user`,
    },
    {
      title: `chmod (Numerical)`,
      command: `chmod 755 {file}`,
      info: `Grants all permission for user`,
    },
    {
      title: `Modify User Ownership`,
      command: `sudo chown {user} {file}`,
      info: `Sets owner of file to user`,
    },
    {
      title: `Modify Group Ownership`,
      command: `sudo chgrp {group} {file}`,
      info: `Sets the group of file to selected`,
    },
    {
      title: `Modify user and group simultaneously`,
      command: `sudo chown {user}:{group} {file}`,
      info: `Does both modifier for the file`,
    },
    {
      title: `Umask`,
      command: `umask 021`,
      info: `New files has all permissions granted`,
    },
    {
      title: `Setuid`,
      command: `passwd`,
      info: `Change user password`,
    },
    {
      title: `Setgid`,
      command: `sudo chmod g+s {file}`,
      info: `Allows to run as if a member of group.`,
    },
  ],
};
