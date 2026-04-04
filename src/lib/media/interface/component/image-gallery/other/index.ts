import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface IImageItem {
  id: string;
  src: string;
  alt?: string;
  caption?: string;
}

export interface IImageGalleryProps extends InformationHTMLAttributes<HTMLDivElement> {
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


