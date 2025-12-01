import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IImageWithCaptionProps
 * @description Основной интерфейс свойств компонента ImageWithCaption
 * Следует принципу подстановки Лисков (LSP) - можно использовать производные типы
 */
export interface IImageWithCaptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /** URL изображения */
  src?: string;
  /** Альтернативный текст изображения */
  alt?: string;
  /** Подпись к изображению */
  caption?: string;
  /** Ширина изображения */
  width?: string;
  /** Высота изображения */
  height?: string;
  /** CSS класс для основного контейнера */
  class?: string;
  /** CSS класс для изображения */
  imageClass?: string;
  /** CSS класс для подписи */
  captionClass?: string;
  /** Закругленные углы */
  rounded?: boolean;
  /** Наличие границы */
  bordered?: boolean;
  /** Наличие тени */
  shadow?: boolean;
  /** Режим загрузки изображения */
  loading?: 'lazy' | 'eager';
}