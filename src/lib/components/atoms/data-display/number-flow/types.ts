/**
 * NumberFlow types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

// Number formatting options type
export interface NumberFlowFormatOptions extends Intl.NumberFormatOptions {}

// Timing configuration type
export interface TimingConfig {
  duration: number;
  easing?: string;
}

export interface INumberFlowProps {
  value?: number;
  format?: NumberFlowFormatOptions;
  locales?: string | string[];
  prefix?: string;
  suffix?: string;
  animated?: boolean;
  trend?: number;
  digits?: any[] | null;
  respectMotionPreference?: boolean;
  transformTiming?: TimingConfig;
  spinTiming?: TimingConfig;
  opacityTiming?: TimingConfig;
  willChange?: boolean;
  onAnimationsStart?: () => void;
  onAnimationsFinish?: () => void;
}

export interface INumberFlowStyleClasses {
  container: string;
  digitContainer: string;
  digitFace: string;
}

export type NumberFlowProps = INumberFlowProps & HTMLAttributes<HTMLDivElement>;