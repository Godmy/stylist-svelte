import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * Варианты отображения диалога
 */
export type DialogVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

/**
 * Размеры диалога
 */
export type DialogWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Типы пропсов для компонента Dialog
 */
export interface IDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /**
   * Открыт ли диалог
   */
  open?: boolean;

  /**
   * Заголовок диалога
   */
  title?: string;

  /**
   * Описание диалога
   */
  description?: string;

  /**
   * Основной контент диалога
   */
  children?: Snippet;

  /**
   * Футер диалога
   */
  footer?: Snippet;

  /**
   * CSS класс для основного контейнера
   */
  class?: string;

  /**
   * CSS класс для содержимого
   */
  contentClass?: string;

  /**
   * CSS класс для заголовка
   */
  headerClass?: string;

  /**
   * CSS класс для тела
   */
  bodyClass?: string;

  /**
   * CSS класс для футера
   */
  footerClass?: string;

  /**
   * Возможность закрытия диалога
   */
  closable?: boolean;

  /**
   * Обработчик закрытия диалога
   */
  onClose?: () => void;

  /**
   * Ширина диалога
   */
  width?: DialogWidth;

  /**
   * Вариант отображения диалога
   */
  variant?: DialogVariant;
}
