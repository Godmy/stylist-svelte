import type { HTMLAttributes } from 'svelte/elements';

/**
 * Типы элементов, которые могут быть добавлены в PageBuilder
 */
export type ElementType =
  | 'text'
  | 'image'
  | 'video'
  | 'button'
  | 'divider'
  | 'heading'
  | 'container'
  | 'grid';

/**
 * Интерфейс для атрибутов текстового элемента
 */
export interface ITextAttributes {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

/**
 * Интерфейс для атрибутов заголовка
 */
export interface IHeadingAttributes extends ITextAttributes {
  level?: number;
}

/**
 * Интерфейс для атрибутов кнопки
 */
export interface IButtonAttributes {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
}

/**
 * Интерфейс для атрибутов изображения
 */
export interface IImageAttributes {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
}

/**
 * Интерфейс для атрибутов контейнера
 */
export interface IContainerAttributes {
  width?: string;
  height?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
}

/**
 * Объединенный тип для атрибутов элемента
 */
export type ElementAttributes =
  | ITextAttributes
  | IHeadingAttributes
  | IButtonAttributes
  | IImageAttributes
  | IContainerAttributes
  | Record<string, any>;

/**
 * Интерфейс для элемента в PageBuilder
 */
export interface IElement {
  id: string;
  type: ElementType;
  content?: string;
  attributes?: ElementAttributes;
  children?: IElement[];
}

/**
 * Интерфейс для элемента панели инструментов
 */
export interface IToolbarItem {
  type: ElementType;
  label: string;
  icon: any;
}

/**
 * Основной интерфейс свойств компонента PageBuilder
 */
export interface IPageBuilderProps extends HTMLAttributes<HTMLDivElement> {
  initialElements?: IElement[];
  onSave?: (elements: IElement[]) => void;
  showToolbar?: boolean;
  showPreview?: boolean;
  editable?: boolean;
  class?: string;
  toolbarClass?: string;
  canvasClass?: string;
  elementClass?: string;
}