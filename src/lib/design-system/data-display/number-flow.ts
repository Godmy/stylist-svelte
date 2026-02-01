export interface NumberFlowFormatOptions extends Intl.NumberFormatOptions {}

export interface TimingConfig {
  duration: number;
  easing?: string;
}

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
  class?: string;
}

export const formatNumberFlowValue = (
  value: number | undefined,
  locales: string | string[] | undefined,
  format: NumberFlowFormatOptions | undefined
) => {
  return new Intl.NumberFormat(locales ?? 'en-US', format).format(value ?? 0);
};

export const getNumberFlowClasses = (className = '') => {
  return {
    container: `inline-flex items-center font-variant-numeric-tabular ${className}`.trim(),
    prefix: 'inline-block',
    suffix: 'inline-block',
    srOnly: 'absolute w-1 h-1 p-0 m-[-1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0'
  };
};
