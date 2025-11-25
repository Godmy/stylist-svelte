/**
 * IconChevron types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

export type IconChevronSize = 'sm' | 'md' | 'lg';

export interface IIconChevronProps {
  isOpen?: boolean;
  size?: IconChevronSize;
  class?: string;
}

export interface IIconChevronStyleClasses {
  container: string;
  rotation: string;
}

export type IconChevronProps = IIconChevronProps & HTMLAttributes<SVGSVGElement>;