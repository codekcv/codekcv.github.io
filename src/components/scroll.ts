import { isMobile } from 'react-device-detect';

// EASE
/* t = current time
 * b = start value
 * c = target value
 * d = duration
 */
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const easeLinear = (t: number, b: number, c: number, d: number) => {
  return (c * t) / d + b;
};

let easeType = isMobile ? easeLinear : easeInOutQuad;

export const scroll = (base: number, added: number, duration: number) => {
  const tick = 1000 / 60;
  let val = 0,
    pos = 0;

  const myInterval = setInterval(() => {
    (val += tick) < duration
      ? (pos = easeType(val, base, added, duration))
      : (() => {
          clearInterval(myInterval);
          pos = base + added;
        })();

    window.scrollTo(pos, 0);
  }, tick);
};
