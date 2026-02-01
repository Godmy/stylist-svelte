import type { HTMLAttributes } from 'svelte/elements';

export interface ImageWithCaptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  src?: string;
  alt?: string;
  caption?: string;
  width?: string;
  height?: string;
  class?: string;
  imageClass?: string;
  captionClass?: string;
  rounded?: boolean;
  bordered?: boolean;
  shadow?: boolean;
  loading?: 'lazy' | 'eager';
}

export const getImageWithCaptionHostClasses = (
  className = '',
  rounded = false,
  bordered = false,
  shadow = false
) => {
  const roundedClass = rounded ? 'rounded-lg' : '';
  const borderedClass = bordered ? 'border border-[--color-border-default]' : '';
  const shadowClass = shadow ? 'shadow-md' : '';
  return `image-with-caption flex flex-col ${roundedClass} ${borderedClass} ${shadowClass} ${className}`.trim();
};

export const getImageWithCaptionImageClasses = (
  className = '',
  rounded = false,
  bordered = false,
  shadow = false
) => {
  const roundedClass = rounded ? 'rounded-lg' : '';
  const borderedClass = bordered ? 'border border-[--color-border-default]' : '';
  const shadowClass = shadow ? 'shadow-md' : '';
  return `w-full object-cover ${roundedClass} ${borderedClass} ${shadowClass} ${className}`.trim();
};

export const getImageWithCaptionTextClasses = (className = '') => {
  return `mt-2 text-center text-sm text-[--color-text-secondary] ${className}`.trim();
};
