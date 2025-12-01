import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IImageItem
 * @description Определяет структуру элемента изображения для ImageGallery компонента
 * Следует принципу единственной ответственности (SRP) - определяет только структуру данных
 */
export interface IImageItem {
  /** Уникальный идентификатор изображения */
  id: string;
  /** URL изображения */
  src: string;
  /** Альтернативный текст */
  alt?: string;
  /** Подпись к изображению */
  caption?: string;
}

/**
 * @interface IImageGalleryProps
 * @description Основной интерфейс свойств компонента ImageGallery
 * Следует принципу подстановки Лисков (LSP) - можно использовать производные типы
 */
export interface IImageGalleryProps extends HTMLAttributes<HTMLDivElement> {
  /** Массив изображений для галереи */
  images: IImageItem[];
  /** Показывать ли миниатюры */
  showThumbnails?: boolean;
  /** Автоматически ли проигрывать слайд-шоу */
  autoPlay?: boolean;
  /** Интервал автопроигрывания в миллисекундах */
  autoPlayInterval?: number;
  /** Показывать ли подписи */
  showCaptions?: boolean;
  /** CSS класс для основного контейнера */
  class?: string;
  /** CSS класс для изображения */
  imageClass?: string;
  /** CSS класс для миниатюры */
  thumbnailClass?: string;
  /** CSS класс для элементов навигации */
  navigationClass?: string;
  /** CSS класс для подписи */
  captionClass?: string;
}