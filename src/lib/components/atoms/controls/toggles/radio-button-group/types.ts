/**
 * Типы и интерфейсы для компонента RadioButtonGroup
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Варианты ориентации группы переключателей
 */
export type RadioButtonGroupOrientation = 'horizontal' | 'vertical';

/**
 * Опция для RadioButtonGroup
 */
export interface IRadioButtonOption {
  /** Значение опции */
  value: string;
  /** Текст метки опции */
  label: string;
  /** Блокировка опции */
  disabled?: boolean;
}

/**
 * Пропсы для компонента RadioButtonGroup
 */
export interface IRadioButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Массив опций для группы переключателей */
  options: IRadioButtonOption[];
  
  /** Выбранное значение */
  value?: string;
  
  /** Имя группы переключателей */
  name?: string;
  
  /** Блокировка всей группы */
  disabled?: boolean;
  
  /** Обязательное поле */
  required?: boolean;
  
  /** Ориентация группы переключателей */
  orientation?: RadioButtonGroupOrientation;
  
  /** Дополнительные CSS классы для контейнера */
  class?: string;
  
  /** Дополнительные CSS классы для опции */
  optionClass?: string;
  
  /** Дополнительные CSS классы для метки */
  labelClass?: string;
  
  /** Дополнительные CSS классы для переключателя */
  radioClass?: string;
  
  /** Обработчик события ввода */
  onInput?: (value: string) => void;
  
  /** Обработчик изменения значения */
  onChange?: (value: string) => void;
}