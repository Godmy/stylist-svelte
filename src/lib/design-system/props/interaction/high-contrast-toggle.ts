/**
 * Типы данных для компонента HighContrastToggle
 * 
 * Эти типы определяют контракты для props и внутренних данных компонента,
 * обеспечивая строгую типизацию и улучшая поддерживаемость кода.
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Доступные темы для компонента
 */
export type THighContrastTheme = 'light' | 'dark';

/**
 * Типы для пропсов компонента HighContrastToggle
 */
export interface IHighContrastToggleProps extends HTMLAttributes<HTMLDivElement> {
  /** Включен ли режим высокого контраста */
  enabled?: boolean;
  /** Обработчик переключения режима */
  onToggle?: (enabled: boolean) => void;
  /** Текущая тема ('light' или 'dark') */
  theme?: THighContrastTheme;
  /** Дополнительные CSS классы для контейнера */
  class?: string;
  /** Дополнительные CSS классы для кнопки */
  buttonClass?: string;
}

/**
 * Внутренние состояния компонента
 */
export interface IHighContrastState {
  isHighContrast: boolean;
}