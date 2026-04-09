import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type FunnelStep = {
  id: string;
  name: string;
  value: number;
  color?: string;
};

export type ConversionFunnelProps = {
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
} & InformationHTMLAttributes<HTMLDivElement>;
