// Default values
export const DEFAULT_VALUE = 0;
export const DEFAULT_LOCALES: string | string[] = 'en-US';
export const DEFAULT_PREFIX = '';
export const DEFAULT_SUFFIX = '';
export const DEFAULT_ANIMATED = true;
export const DEFAULT_TREND = 0;
export const DEFAULT_RESPECT_MOTION_PREFERENCE = true;
export const DEFAULT_WILL_CHANGE = false;

// Default timing configurations
export const DEFAULT_TRANSFORM_TIMING = { duration: 500, easing: 'ease-in-out' };
export const DEFAULT_SPIN_TIMING = { duration: 800, easing: 'ease-in-out' };
export const DEFAULT_OPACITY_TIMING = { duration: 300, easing: 'ease-in-out' };

// Default format options
export const DEFAULT_FORMAT = {};

// Animation settings
export const ANIMATION_DELAY_PER_DIGIT = 50; // 50ms delay per digit

// CSS classes
export const NUMBER_FLOW_CLASS = 'number-flow';
export const REDUCED_MOTION_CLASS = 'reduced-motion';
export const ANIMATING_CLASS = 'animating';
export const PREFIX_CLASS = 'prefix';
export const SUFFIX_CLASS = 'suffix';
export const DIGIT_CONTAINER_CLASS = 'digit-container';
export const DIGIT_FACE_CLASS = 'digit-face';
export const DIGIT_OLD_CLASS = 'digit-old';
export const DIGIT_CURRENT_CLASS = 'digit-current';
export const SR_ONLY_CLASS = 'sr-only';

// ARIA attributes
export const ARIA_ROLE = 'status';
export const ARIA_LIVE_POLITE = 'polite';
export const ARIA_LIVE_ASSERTIVE = 'assertive';

// Media query for reduced motion
export const REDUCED_MOTION_MEDIA_QUERY = '(prefers-reduced-motion: reduce)';