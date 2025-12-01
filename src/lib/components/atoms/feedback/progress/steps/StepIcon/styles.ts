import type { StepIconStatus, StepIconSize } from './types';

// Strategy pattern for content rendering
export interface StepContent {
  type: 'icon' | 'number';
  icon?: 'Check' | 'X';
  size?: number;
  value?: number;
}

export const getStepContent = (status: StepIconStatus, stepNumber: number | undefined, size: StepIconSize): StepContent => {
  switch(status) {
    case 'completed':
      return { type: 'icon', icon: 'Check', size: size === 'sm' ? 12 : size === 'md' ? 16 : 20 };
    case 'error':
      return { type: 'icon', icon: 'X', size: size === 'sm' ? 12 : size === 'md' ? 16 : 20 };
    case 'active':
    case 'pending':
    default:
      return { type: 'number', value: stepNumber };
  }
};

// Define size classes
export const getStepIconSizeClass = (size: StepIconSize) => {
  switch(size) {
    case 'sm': return 'w-6 h-6 text-xs';
    case 'lg': return 'w-10 h-10 text-base';
    case 'md':
    default: return 'w-8 h-8 text-sm';
  }
};

// Define status classes
export const getStepIconStatusClass = (status: StepIconStatus) => {
  switch(status) {
    case 'completed': return 'bg-[--color-success-500] text-[--color-text-inverse]';
    case 'active': return 'bg-[--color-primary-500] text-[--color-text-inverse]';
    case 'error': return 'bg-[--color-danger-500] text-[--color-text-inverse]';
    case 'pending':
    default: return 'bg-[--color-border-secondary] text-[--color-text-secondary]';
  }
};

// Combine all classes
export const getStepIconClasses = (status: StepIconStatus, size: StepIconSize, className: string) => {
  const statusClass = getStepIconStatusClass(status);
  const sizeClass = getStepIconSizeClass(size);
  const baseClasses = 'inline-flex items-center justify-center rounded-full border-2';
  
  return `${baseClasses} ${statusClass} ${sizeClass} ${className}`.trim();
};