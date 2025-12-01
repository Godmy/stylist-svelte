/**
 * MetricCard types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type MetricCardSize = 'sm' | 'md' | 'lg';

export type MetricCardTrend = 'positive' | 'negative' | 'neutral';

export type MetricCardIcon = 'up' | 'down';

export interface IMoleculeMetricCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  change?: number; // Percentage change
  changeLabel?: string;
  icon?: MetricCardIcon;
  trend?: MetricCardTrend;
  size?: MetricCardSize;
  class?: string;
  valueClass?: string;
  titleClass?: string;
}