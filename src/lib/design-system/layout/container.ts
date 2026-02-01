import type { Snippet } from 'svelte';

export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps {
  children: Snippet;
  maxWidth?: ContainerMaxWidth;
  class?: string;
}

const CONTAINER_MAX_WIDTH_CLASSES: Record<ContainerMaxWidth, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full'
};

export const getContainerClasses = (maxWidth: ContainerMaxWidth, className = '') => {
  const maxWidthClass = CONTAINER_MAX_WIDTH_CLASSES[maxWidth] || CONTAINER_MAX_WIDTH_CLASSES.full;
  return `mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`.trim();
};
