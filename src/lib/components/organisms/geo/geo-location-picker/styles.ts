/**
 * Менеджер стилей для компонента GeoLocationPicker
 * Реализует принцип единственной ответственности (SRP) из SOLID
 * Отделяет логику стилизации от логики компонента
 * Использует систему темизации Stylist-Svelte
 */

import type { IGeoLocationPickerProps } from './types';

export class GeoLocationPickerStyleManager {
  /**
   * Получает CSS классы для основного контейнера компонента
   */
  static getHostClasses(props: IGeoLocationPickerProps): string {
    const baseClasses = 'geo-location-picker';
    const customClass = props.class || '';
    
    return `${baseClasses} ${customClass}`.trim();
  }

  /**
   * Получает inline стили для основного контейнера (с учетом ширины)
   */
  static getHostStyles(props: IGeoLocationPickerProps): string {
    return `width: ${props.width || '100%'};`;
  }

  /**
   * Получает CSS классы для заголовка компонента
   */
  static getHeaderClasses(): string {
    return 'text-lg font-medium text-gray-900 flex items-center';
  }

  /**
   * Получает inline стили для заголовка
   */
  static getHeaderStyles(): string {
    return 'color: var(--color-text-primary);';
  }

  /**
   * Получает CSS классы для описания компонента
   */
  static getDescriptionClasses(): string {
    return 'text-sm text-gray-500';
  }

  /**
   * Получает CSS классы для контейнера поиска
   */
  static getSearchContainerClasses(): string {
    return 'mb-4 relative';
  }

  /**
   * Получает CSS классы для поля ввода поиска
   */
  static getSearchInputClasses(): string {
    return 'block w-full pl-10 pr-3 py-2 border rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 sm:text-sm';
  }

  /**
   * Получает inline стили для поля ввода поиска
   */
  static getSearchInputStyles(): string {
    return `
      background-color: var(--color-background-input); 
      border-color: var(--color-border-default); 
      color: var(--color-text-default);
    `;
  }

  /**
   * Получает CSS классы для иконки поиска
   */
  static getSearchIconClasses(): string {
    return 'h-5 w-5';
  }

  /**
   * Получает inline стили для иконки поиска
   */
  static getSearchIconStyles(): string {
    return 'color: var(--color-text-muted);';
  }

  /**
   * Получает CSS классы для контейнера карты
   */
  static getMapContainerClasses(props: IGeoLocationPickerProps): string {
    const baseClasses = 'relative rounded-lg overflow-hidden border';
    const customClass = props.mapClass || '';
    
    return `${baseClasses} ${customClass}`.trim();
  }

  /**
   * Получает inline стили для контейнера карты
   */
  static getMapContainerStyles(props: IGeoLocationPickerProps): string {
    return `height: ${props.height || '400px'}; border-color: var(--color-border-default);`;
  }

  /**
   * Получает CSS классы для основного слоя карты
   */
  static getMapLayerClasses(props: IGeoLocationPickerProps): string {
    const baseClasses = 'w-full h-full relative';
    const customClass = props.mapClass || '';
    
    return `${baseClasses} ${customClass}`.trim();
  }

  /**
   * Получает CSS классы для элемента управления
   */
  static getControlButtonClasses(): string {
    return '';
  }

  /**
   * Получает CSS классы для контейнера элементов управления картой
   */
  static getControlsContainerClasses(props: IGeoLocationPickerProps): string {
    const baseClasses = 'absolute right-4 top-4 flex flex-col space-y-2';
    const customClass = props.controlsClass || '';
    
    return `${baseClasses} ${customClass}`.trim();
  }

  /**
   * Получает CSS классы для контейнера отображения координат
   */
  static getCoordinatesDisplayClasses(): string {
    return 'absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm';
  }

  /**
   * Получает CSS классы для заголовка координат
   */
  static getCoordinatesHeaderClasses(): string {
    return 'font-medium';
  }

  /**
   * Получает CSS классы для отдельных координат
   */
  static getCoordinateClasses(): string {
    return 'text-xs text-gray-700';
  }

  /**
   * Получает CSS классы для контейнера выбранного местоположения
   */
  static getSelectedLocationContainerClasses(): string {
    return 'mt-4 p-4 rounded-lg';
  }

  /**
   * Получает inline стили для контейнера выбранного местоположения
   */
  static getSelectedLocationContainerStyles(): string {
    return 'background-color: var(--color-background-subtle);';
  }

  /**
   * Получает CSS классы для заголовка выбранного местоположения
   */
  static getSelectedLocationHeaderClasses(): string {
    return 'font-medium text-gray-900';
  }

  /**
   * Получает inline стили для заголовка выбранного местоположения
   */
  static getSelectedLocationHeaderStyles(): string {
    return 'color: var(--color-text-primary);';
  }

  /**
   * Получает CSS классы для элементов информации о местоположении
   */
  static getLocationInfoItemClasses(): string {
    return 'mt-2 space-y-1';
  }

  /**
   * Получает CSS классы для отдельного поля информации о местоположении
   */
  static getLocationInfoFieldClasses(): string {
    return 'text-sm text-gray-700';
  }

  /**
   * Получает CSS классы для названия поля информации
   */
  static getLocationInfoFieldNameClasses(): string {
    return 'font-medium';
  }
}