/**
 * AccordionIcon types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

export type AccordionIconSize = 'sm' | 'md' | 'lg';

export interface IAccordionIconProps {
  isOpen?: boolean;
  size?: AccordionIconSize;
  class?: string;
}

export interface IAccordionIconStyleClasses {
  container: string;
  rotation: string;
}

export type AccordionIconProps = IAccordionIconProps & HTMLAttributes<SVGSVGElement>;