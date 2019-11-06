import {
  isMobile,
  isChrome,
  isEdge,
  isOpera,
  browserName,
} from 'react-device-detect';

const result = () =>
  isMobile &&
  (isChrome ||
    isEdge ||
    isOpera ||
    (browserName === 'Mobile Safari' || browserName === 'Android Browser'));

export default result;
