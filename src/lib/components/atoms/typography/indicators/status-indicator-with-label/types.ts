import type { HTMLAttributes } from 'svelte/elements';

export type Status = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'custom';

export interface IStatusIndicatorWithLabelProps extends HTMLAttributes<HTMLDivElement> {
  status: Status;
  label: string;
  customColor?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  class?: string;
  indicatorClass?: string;
  labelClass?: string;
}