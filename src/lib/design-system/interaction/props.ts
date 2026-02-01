import type { DefaultVariants } from '../tokens/variants';
import type { ComponentSize } from '../tokens/sizes';

/**
 * Интерфейс для компонентов с вариантом
 * @template T Тип варианта (по умолчанию string)
 */
export interface IVariant<T extends string = string> {
  /**
   * Вариант компонента
   */
  variant?: T;
}

/**
 * Интерфейс для компонентов с размером
 * @template T Тип размера (по умолчанию string)
 */
export interface ISize<T extends string = string> {
  /**
   * Размер компонента
   */
  size?: T;
}

/**
 * Интерфейс для стилизуемых компонентов
 * Объединяет варианты, размеры и дополнительный класс
 * @template V Тип варианта
 * @template S Тип размера
 */
export interface IStyleable<V extends string = string, S extends string = string>
  extends IVariant<V>,
    ISize<S> {
  /**
   * Дополнительный CSS класс
   */
  class?: string;
}

/**
 * Интерфейс для компонентов, которые можно отключить
 */
export interface IDisableable {
  /**
   * Флаг отключения компонента
   */
  disabled?: boolean;
}

/**
 * Интерфейс для компонентов с состоянием загрузки
 */
export interface ILoadable {
  /**
   * Флаг состояния загрузки
   */
  loading?: boolean;
}

/**
 * Интерфейс для кликабельных компонентов
 */
export interface IClickable {
  /**
   * Обработчик клика
   */
  onclick?: (event: MouseEvent) => void;
}

/**
 * Объединенный интерфейс свойств для интерактивных компонентов
 * Включает в себя все базовые интерфейсы и общие свойства
 */
export interface Props extends IDisableable, ILoadable, IClickable, IStyleable<DefaultVariants, ComponentSize> {
  /**
   * Дополнительный CSS класс
   */
  class?: string;
  /**
   * ARIA метка для доступности
   */
  ariaLabel?: string;
  /**
   * Флаг блочного отображения
   */
  block?: boolean;
  /**
   * Метка во время загрузки
   */
  loadingLabel?: string;
  /**
   * Дочерние элементы компонента
   */
  children?: any;
  /**
   * Иконка компонента
   */
  icon?: any;
}
