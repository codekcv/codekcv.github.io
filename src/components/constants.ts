import { isMobile } from 'react-device-detect';

export const SCROLL_DURATION = isMobile ? 250 : 500;
export const ANIMATION_DELAY = isMobile ? 250 : 150;
export const SWIPE_THRESHOLD = 40;
