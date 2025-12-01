export type LazyContentType = 'image' | 'iframe' | 'component';

export type LazyContent = {
  id: string;
  type: LazyContentType;
  src: string;
  alt?: string;
  title?: string;
  loading?: 'lazy' | 'eager';
};

export type LazyLoaderVariant = 'default';
export type LazyLoaderSize = 'sm' | 'md' | 'lg';

export interface ILazyLoaderProps {
  content: LazyContent[];
  threshold?: number;
  rootMargin?: string;
  placeholder?: string;
  fallback?: string;
  preload?: boolean;
  showPlaceholder?: boolean;
  showProgress?: boolean;
  variant?: LazyLoaderVariant;
  size?: LazyLoaderSize;
  class?: string;
  placeholderClass?: string;
  contentClass?: string;
  errorClass?: string;
}