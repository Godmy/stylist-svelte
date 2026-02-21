/**
 * Менеджер стилей для компонента DownloadCard
 *
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 * 
 * НОРМАЛИЗОВАННАЯ ВЕРСИЯ - использует общие базовые классы из cards.ts
 */

import type { DownloadCardVariant } from '$stylist/design-system/props/information/download-card';
import {
  CARD_BASE_CLASSES,
  CARD_ICON_CONTAINER_CLASSES,
  CARD_ICON_SIZE_CLASSES,
  CARD_TEXT_CONTENT_CLASSES,
  CARD_TRUNCATE_CLASSES,
  CARD_ACTIONS_CLASSES
} from '$stylist/design-system/classes/information/cards';

export class DownloadCardStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера DownloadCard
   * Использует нормализованные базовые классы для карточек
   */
  static getContainerClasses(className?: string): string {
    return `${CARD_BASE_CLASSES} download-card flex items-center p-4 hover:shadow-md transition-shadow duration-200 ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для иконки файла
   * Использует нормализованные классы для иконок
   */
  static getIconContainerClasses(): string {
    return CARD_ICON_CONTAINER_CLASSES;
  }

  /**
   * Возвращает CSS-классы для иконки в зависимости от варианта
   */
  static getIconClasses(variant: DownloadCardVariant = 'primary'): string {
    const variantClasses = {
      primary: 'text-blue-500 bg-blue-50',
      secondary: 'text-gray-500 bg-gray-50',
      success: 'text-green-500 bg-green-50',
      warning: 'text-yellow-500 bg-yellow-50',
      danger: 'text-red-500 bg-red-50'
    };

    return `${CARD_ICON_SIZE_CLASSES.md} ${variantClasses[variant] || variantClasses.primary}`;
  }

  /**
   * Возвращает CSS-классы для контейнера информации о файле
   * Использует нормализованные классы для текстового контента
   */
  static getInfoContainerClasses(): string {
    return CARD_TEXT_CONTENT_CLASSES;
  }

  /**
   * Возвращает CSS-классы для имени файла
   * Использует нормализованные классы для усечения текста
   */
  static getFileNameClasses(): string {
    return `text-sm font-medium text-[--color-text-primary] ${CARD_TRUNCATE_CLASSES} block`;
  }

  /**
   * Возвращает CSS-классы для метаданных файла
   */
  static getMetadataClasses(): string {
    return 'text-xs text-[--color-text-secondary] mt-1 flex flex-wrap gap-2';
  }

  /**
   * Возвращает CSS-классы для отдельного элемента метаданных
   */
  static getMetadataItemClasses(): string {
    return 'inline-flex items-center';
  }

  /**
   * Возвращает CSS-классы для кнопки скачивания
   * Использует нормализованные классы для действий
   */
  static getDownloadButtonClasses(variant: DownloadCardVariant = 'primary'): string {
    const variantClasses = {
      primary: 'text-blue-600 hover:text-blue-800',
      secondary: 'text-gray-600 hover:text-gray-800',
      success: 'text-green-600 hover:text-green-800',
      warning: 'text-yellow-600 hover:text-yellow-800',
      danger: 'text-red-600 hover:text-red-800'
    };

    return `ml-4 p-2 rounded-full hover:bg-[--color-background-secondary] transition-colors duration-150 ${variantClasses[variant] || variantClasses.primary}`;
  }
}