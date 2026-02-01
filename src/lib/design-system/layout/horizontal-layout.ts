import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type HorizontalGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type HorizontalAlignItems = 'start' | 'center' | 'end' | 'stretch';
export type HorizontalJustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface HorizontalLayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  children: Snippet;
  class?: string;
  gap?: HorizontalGap;
  alignItems?: HorizontalAlignItems;
  justifyContent?: HorizontalJustifyContent;
  wrap?: boolean;
}

const GAP_CLASSES: Record<HorizontalGap, string> = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8'
};

const ALIGN_ITEMS_CLASSES: Record<HorizontalAlignItems, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
};

const JUSTIFY_CONTENT_CLASSES: Record<HorizontalJustifyContent, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

export const getHorizontalLayoutClasses = (
  gap: HorizontalGap,
  alignItems: HorizontalAlignItems,
  justifyContent: HorizontalJustifyContent,
  wrap: boolean,
  className = ''
) => {
  const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';
  return `flex ${ALIGN_ITEMS_CLASSES[alignItems]} ${JUSTIFY_CONTENT_CLASSES[justifyContent]} ${wrapClass} ${GAP_CLASSES[gap]} ${className}`.trim();
};
