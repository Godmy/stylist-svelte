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

/**
 * Менеджер стилей для компонента Alert
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только генерирует CSS-классы на основе пропсов
 * - Не содержит логики отображения или поведения
 * - Изолирует стили от компонента для упрощения поддержки
 */
export class AlertStyleManager {
  /**
   * Получить основные CSS-классы для алерта
   */
  static getBaseClasses(variant: AlertVariant): string {
    const baseClasses = [
      'rounded-md',
      'border',
      'p-4'
    ];

    // Добавляем специфичные классы для каждого варианта
    switch (variant) {
      case 'info':
        baseClasses.push(
          'bg-[--color-info-50]',
          'border-[--color-info-200]',
          'dark:bg-[--color-info-900]',
          'dark:border-[--color-info-700]',
          'text-[--color-info-800]',
          'dark:text-[--color-info-200]'
        );
        break;
      case 'success':
        baseClasses.push(
          'bg-[--color-success-50]',
          'border-[--color-success-200]',
          'dark:bg-[--color-success-900]',
          'dark:border-[--color-success-700]',
          'text-[--color-success-800]',
          'dark:text-[--color-success-200]'
        );
        break;
      case 'warning':
        baseClasses.push(
          'bg-[--color-warning-50]',
          'border-[--color-warning-200]',
          'dark:bg-[--color-warning-900]',
          'dark:border-[--color-warning-700]',
          'text-[--color-warning-800]',
          'dark:text-[--color-warning-200]'
        );
        break;
      case 'error':
        baseClasses.push(
          'bg-[--color-danger-50]',
          'border-[--color-danger-200]',
          'dark:bg-[--color-danger-900]',
          'dark:border-[--color-danger-700]',
          'text-[--color-danger-800]',
          'dark:text-[--color-danger-200]'
        );
        break;
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для контейнера иконки
   */
  static getIconContainerClasses(): string {
    return [
      'flex-shrink-0'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для иконки
   */
  static getIconClasses(variant: AlertVariant): string {
    const baseClasses = [
      'h-5',
      'w-5'
    ];

    // Добавляем цвет в зависимости от варианта
    switch (variant) {
      case 'info':
        baseClasses.push('text-[--color-info-500]');
        break;
      case 'success':
        baseClasses.push('text-[--color-success-500]');
        break;
      case 'warning':
        baseClasses.push('text-[--color-warning-500]');
        break;
      case 'error':
        baseClasses.push('text-[--color-danger-500]');
        break;
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для текстового контейнера
   */
  static getTextContainerClasses(): string {
    return [
      'ml-3'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return [
      'text-[--text-size-sm]',
      'font-medium',
      'text-[--color-text-primary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для содержимого
   */
  static getContentContainerClasses(): string {
    return [
      'mt-2',
      'text-[--text-size-sm]',
      'text-[--color-text-secondary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для кнопки закрытия
   */
  static getCloseButtonClasses(variant: AlertVariant): string {
    const baseClasses = [
      '-mx-1.5',
      '-my-1.5',
      'rounded-md',
      'p-1.5',
      'focus:outline-none',
      'focus:ring-2'
    ];

    // Добавляем специфичные классы для каждого варианта
    switch (variant) {
      case 'info':
        baseClasses.push(
          'focus:ring-[--color-info-500]',
          'hover:bg-[--color-info-100]'
        );
        break;
      case 'success':
        baseClasses.push(
          'focus:ring-[--color-success-500]',
          'hover:bg-[--color-success-100]'
        );
        break;
      case 'warning':
        baseClasses.push(
          'focus:ring-[--color-warning-500]',
          'hover:bg-[--color-warning-100]'
        );
        break;
      case 'error':
        baseClasses.push(
          'focus:ring-[--color-danger-500]',
          'hover:bg-[--color-danger-100]'
        );
        break;
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для контейнера кнопки закрытия
   */
  static getCloseButtonContainerClasses(): string {
    return [
      'ml-auto',
      'pl-3'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для основного контейнера
   */
  static getMainContainerClasses(): string {
    return [
      'flex'
    ].join(' ');
  }
}

