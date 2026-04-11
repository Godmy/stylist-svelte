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
