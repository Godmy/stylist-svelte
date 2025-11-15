// Number formatting options type
export interface NumberFlowFormatOptions extends Intl.NumberFormatOptions {}

// Timing configuration type
export interface TimingConfig {
  duration: number;
  easing?: string;
}

// Props interface for NumberFlow component
export interface NumberFlowProps {
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