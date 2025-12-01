import type { Snippet } from 'svelte';

/**
 * Варианты отображения алерта
 */
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

/**
 * Типы пропсов для компонента Alert
 */
export interface IAlertProps {
  /**
   * Визуальный стиль алерта
   */
  variant?: AlertVariant;

  /**
   * Заголовок алерта
   */
  title?: string;

  /**
   * Возможность закрытия алерта
   */
  closable?: boolean;

  /**
   * Показывать ли иконку статуса
   */
  icon?: boolean;

  /**
   * Содержимое алерта
   */
  content?: Snippet;

  /**
   * Содержимое слота по умолчанию
   */
  children?: Snippet;
}