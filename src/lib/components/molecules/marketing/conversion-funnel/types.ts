import type { HTMLAttributes } from 'svelte/elements';

export type FunnelStep = {
  id: string;
  name: string;
  value: number;
  color?: string;
};

export type Props = {
  title?: string;
  subtitle?: string;
  steps: FunnelStep[];
  showPercentage?: boolean;
  showValues?: boolean;
  showTrend?: boolean;
  showConversionRate?: boolean;
  height?: number;
  class?: string;
  headerClass?: string;
  stepClass?: string;
} & HTMLAttributes<HTMLDivElement>;
