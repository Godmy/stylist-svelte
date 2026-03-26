import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenShape } from '$stylist/architecture/type/token/shape';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';

export interface IconChevronProps extends InformationHTMLAttributes<HTMLSpanElement> {
  direction?: 'up' | 'down' | 'left' | 'right';
  size?: TokenSize | '2xl';
  class?: string;
  isOpen?: boolean;
  variant?: TokenAppearance;
  disabled?: boolean;
}

export interface IconCircleProps extends InformationHTMLAttributes<HTMLDivElement> {
  size?: TokenSize;
  class?: string;
  variant?: TokenAppearance | 'success' | 'warning' | 'danger' | 'error';
  filled?: boolean;
  disabled?: boolean;
  icon?: Snippet;
}

export interface IconWrapperProps extends InformationHTMLAttributes<HTMLDivElement> {
  size?: TokenSize;
  variant?: TokenAppearance | 'success' | 'warning' | 'danger' | 'error';
  shape?: TokenShape | 'rounded';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'error';
  disabled?: boolean;
  class?: string;
  content?: Snippet;
}




