import { isMobile } from 'react-device-detect';

// EASE
/* t = current time
 * b = start value
 * c = target value
 * d = duration */

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const easeLinear = (t: number, b: number, c: number, d: number) => {
  return (c * t) / d + b;
};

const tick = 1000 / 60;
const easeType = isMobile ? easeLinear : easeInOutQuad;

export const scroll = (base: number, added: number, duration: number) => {
  let val = 0;

  const myInterval = setInterval(() => {
    if ((val += tick) < duration) {
      window.scrollTo(easeType(val, base, added, duration), 0);
    } else {
      window.scrollTo(base + added, 0);
      clearInterval(myInterval);
    }
  }, tick);
};
