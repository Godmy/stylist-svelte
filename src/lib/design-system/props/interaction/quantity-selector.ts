/**
 * Типы и интерфейсы для компонента QuantitySelector
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Размеры элементов в компоненте QuantitySelector
 */
export type QuantitySelectorSize = 'sm' | 'md' | 'lg';

/**
 * Варианты стиля компонента QuantitySelector
 */
export type QuantitySelectorVariant = 'default' | 'minimal' | 'filled';

/**
 * Пропсы для компонента QuantitySelector
 */
export interface IQuantitySelectorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Текущее значение количества
   * @default 1
   */
  value?: number;
  
  /**
   * Минимальное значение
   * @default 1
   */
  min?: number;
  
  /**
   * Максимальное значение
   * @default 99
   */
  max?: number;
  
  /**
   * Шаг изменения
   * @default 1
   */
  step?: number;
  
  /**
   * Отключенное состояние
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Вариант стиля
   * @default 'default'
   */
  variant?: QuantitySelectorVariant;
  
  /**
   * Размер элементов
   * @default 'md'
   */
  size?: QuantitySelectorSize;
  
  /**
   * Дополнительные CSS классы для корневого элемента
   */
  class?: string;
  
  /**
   * Дополнительные CSS классы для поля ввода
   */
  inputClass?: string;
  
  /**
   * Дополнительные CSS классы для кнопок
   */
  buttonClass?: string;
  
  /**
   * Обработчик изменения значения
   */
  onValueChange?: (value: number) => void;
  
  /**
   * Обработчик увеличения значения
   */
  onIncrement?: (value: number) => void;
  
  /**
   * Обработчик уменьшения значения
   */
  onDecrement?: (value: number) => void;
  
  /**
   * Показывать ли поле ввода
   * @default true
   */
  showInput?: boolean;
  
  /**
   * Показывать ли кнопки
   * @default true
   */
  showButtons?: boolean;
  
  /**
   * Текст метки
   */
  label?: string;
}