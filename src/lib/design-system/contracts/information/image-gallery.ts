import type { HTMLAttributes } from 'svelte/elements';

export interface IImageItem {
  id: string;
  src: string;
  alt?: string;
  caption?: string;
}

export interface IImageGalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: IImageItem[];
  showThumbnails?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showCaptions?: boolean;
  class?: string;
  imageClass?: string;
  thumbnailClass?: string;
  navigationClass?: string;
  captionClass?: string;
}
