import { Commands } from '../Grasshopper';

export const PACKAGES: Commands = {
  title: 'Packages',
  data: [
    {
      title: `gzip`,
      command: `gzip {file}`,
      info: `Compresses a file down`,
    },
    {
      title: `gunzip`,
      command: `gunzip {file}.gz`,
      info: `Decompresses a .gz file`,
    },
    {
      title: `Archiving with tar`,
      command: `tar cvf {myTar}.tar {file1} {file2}`,
      info: `Archive through tar`,
    },
    {
      title: `Unpacking archives with tar`,
      command: `tar xvf {myTar}.tar`,
      info: `Extracts a tar acrhive`,
    },
    {
      title: `Compressing archive with tar`,
      command: `tar czf {myTar}.tar.gz`,
      info: `Creates a compresses tar file`,
    },
    {
      title: `Uncompress and unpack tar`,
      command: `tar xzf {myTar}.tar`,
      info: `e'X'tract all 'Z'ee 'F'iles :)`,
    },
    {
      title: `dpkg (Debian Package)`,
      command: [`dpkg -i {package}.deb`, `dpkg -r {package}.deb`],
      info: [`Installs a debian package`, `Removes a debian package`],
    },
    {
      title: `apt (Advanced Packaging Tool)`,
      command: [`apt install {package}`, `apt remove {package}`],
      info: [
        `Installs package from a repository`,
        `Removes package from a repository`,
      ],
    },
    {
      title: `List Debian Packages`,
      command: `dpkg -l`,
      info: `List installed debian packages`,
    },
    {
      title: `Update Packages`,
      command: `apt update; apt upgrade`,
      info: `Updates repository packages`,
    },
    {
      title: `Packages Information`,
      command: `apt show {packageName}`,
      info: `Check installed package information`,
    },
  ],
};
