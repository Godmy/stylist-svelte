/**
 * Counter types and interfaces following SOLID principles
 */

export type CounterVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
export type CounterSize = 'sm' | 'md' | 'lg';

export interface ICounterProps {
  count?: number;
  max?: number;
  variant?: CounterVariant;
  size?: CounterSize;
  class?: string;
}

export interface ICounterStyleClasses {
  variant: string;
  size: string;
}