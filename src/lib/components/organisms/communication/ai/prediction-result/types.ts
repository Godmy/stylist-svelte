import type { HTMLAttributes } from 'svelte/elements';

export type Prediction = {
  label: string;
  value: number;
  confidence?: number;
};

export type Props = {
  title?: string;
  description?: string;
  predictions?: Prediction[];
  actualValue?: number;
  predictedValue?: number;
  modelUsed?: string;
  confidence?: number;
  status?: 'success' | 'error' | 'loading' | 'warning';
  onRetry?: () => void;
  showChart?: boolean;
  class?: string;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
} & HTMLAttributes<HTMLDivElement>;
