/**
 * @fileoverview
 * Менеджер стилей для компонента PageBuilder.
 * Следует принципу единственной ответственности (SRP) из SOLID.
 * Отделяет логику стилизации от компонента.
 * Использует CSS-переменные из темы для поддержки светлой/темной темы.
 */

/**
 * Класс для управления стилями компонента PageBuilder
 */
export class PageBuilderStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера PageBuilder
   */
  static getContainerClasses(className?: string): string {
    return `border border-[--color-border] rounded-lg overflow-hidden ${className || ''}`;
  }

  /**
   * Возвращает CSS-классы для панели инструментов
   */
  static getToolbarClasses(toolbarClass?: string): string {
    return `flex items-center p-3 border-b border-[--color-border] bg-[--color-background-secondary] ${toolbarClass || ''}`;
  }

  /**
   * Возвращает CSS-классы для кнопки в панели инструментов
   */
  static getToolbarButtonClasses(): string {
    return 'p-2 rounded hover:bg-[--color-background-hover] flex items-center';
  }

  /**
   * Возвращает CSS-классы для основной области редактирования (canvas)
   */
  static getCanvasClasses(canvasClass?: string, isPreviewMode?: boolean): string {
    return `flex-1 p-6 min-h-[500px] ${canvasClass || ''} ${isPreviewMode ? 'bg-[--color-background-secondary]' : 'bg-[--color-background-primary]'}`;
  }

  /**
   * Возвращает CSS-классы для элемента на холсте
   */
  static getElementClasses(isSelected?: boolean, elementClass?: string): string {
    return `relative group border ${
      isSelected ? 'border-[--color-primary-500]' : 'border-[--color-border-transparent]'
    } p-2 mb-2 rounded ${elementClass || ''}`;
  }

  /**
   * Возвращает CSS-классы для элемента управления перетаскиванием
   */
  static getDragHandleClasses(): string {
    return 'absolute -left-6 top-0 p-1 cursor-move text-[--color-text-secondary] opacity-0 group-hover:opacity-100';
  }

  /**
   * Возвращает CSS-классы для кнопок управления элементами
   */
  static getElementControlButtonClasses(isDeleteButton?: boolean): string {
    if (isDeleteButton) {
      return 'p-1 rounded hover:bg-[--color-background-hover] text-[--color-danger]';
    }
    return 'p-1 rounded hover:bg-[--color-background-hover]';
  }

  /**
   * Возвращает CSS-классы для кнопки добавления элемента
   */
  static getAddElementButtonClasses(): string {
    return 'inline-flex items-center px-3 py-1 border border-[--color-border] shadow-sm text-sm leading-4 font-medium rounded-md text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary]';
  }

  /**
   * Возвращает CSS-классы для панели свойств
   */
  static getPropertiesPanelClasses(): string {
    return 'w-80 border-l border-[--color-border] p-4 bg-[--color-background-primary]';
  }

  /**
   * Возвращает CSS-классы для заголовка панели свойств
   */
  static getPropertiesPanelHeaderClasses(): string {
    return 'flex items-center justify-between mb-4';
  }

  /**
   * Возвращает CSS-классы для поля ввода
   */
  static getInputFieldClasses(): string {
    return 'block w-full px-3 py-2 border border-[--color-border] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
  }

  /**
   * Возвращает CSS-классы для ползунка
   */
  static getSliderClasses(): string {
    return 'block w-full';
  }
}