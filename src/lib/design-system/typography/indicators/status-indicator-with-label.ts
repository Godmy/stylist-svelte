import type { HTMLAttributes } from 'svelte/elements';

export type StatusIndicatorLabelStatus = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'custom';

export interface StatusIndicatorWithLabelProps extends HTMLAttributes<HTMLDivElement> {
  status: StatusIndicatorLabelStatus;
  label: string;
  customColor?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  class?: string;
  indicatorClass?: string;
  labelClass?: string;
}

export const getStatusIndicatorWithLabelContainerClasses = (className = '') => {
  const baseClasses = ['flex', 'items-center'];
  return className ? baseClasses.concat(className).join(' ') : baseClasses.join(' ');
};

export const getStatusIndicatorWithLabelSizeClasses = (size: 'sm' | 'md' | 'lg' = 'md') => {
  const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };
  return sizeClasses[size];
};

export const getStatusIndicatorWithLabelIndicatorClasses = (
  status: StatusIndicatorLabelStatus,
  customColor?: string,
  indicatorClass = ''
) => {
  const baseClasses = ['inline-block', 'rounded-full', 'mr-2'];

  let statusColorClass = 'bg-gray-500';
  if (status === 'success') statusColorClass = 'bg-green-500';
  else if (status === 'warning') statusColorClass = 'bg-yellow-500';
  else if (status === 'error') statusColorClass = 'bg-red-500';
  else if (status === 'info') statusColorClass = 'bg-blue-500';
  else if (status === 'neutral') statusColorClass = 'bg-gray-500';
  else if (status === 'custom' && customColor) statusColorClass = `bg-[${customColor}]`;

  baseClasses.push(statusColorClass);
  if (indicatorClass) baseClasses.push(indicatorClass);

  return baseClasses.join(' ');
};

export const getStatusIndicatorWithLabelLabelClasses = (labelClass = '') => {
  return labelClass;
};
