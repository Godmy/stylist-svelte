/**
 * Типы для компонента ButtonGroup
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный файл отвечает только за типизацию компонента ButtonGroup
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * Возможные варианты кнопок в группе
 */
export type ButtonGroupVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';

/**
 * Возможные ориентации группировки кнопок
 */
export type ButtonGroupOrientation = 'horizontal' | 'vertical';

/**
 * Интерфейс пропсов компонента ButtonGroup
 */
export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Размер кнопок в группе
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Вариант стиля кнопок
   * @default 'primary'
   */
  variant?: ButtonGroupVariant;
  
  /**
   * Ориентация группировки кнопок
   * @default 'horizontal'
   */
  orientation?: ButtonGroupOrientation;
  
  /**
   * Растягивать ли группу на всю ширину
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Содержимое компонента
   */
  children?: Snippet;
}