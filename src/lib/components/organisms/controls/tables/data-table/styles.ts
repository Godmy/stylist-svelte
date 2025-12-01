import type { DataTableVariant } from './types';

/**
 * Менеджер стилей для компонента DataTable
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только генерирует CSS-классы на основе пропсов
 * - Не содержит логики отображения или поведения
 * - Изолирует стили от компонента для упрощения поддержки
 */
export class DataTableStyleManager {
  /**
   * Получить CSS-классы для контейнера таблицы
   */
  static getContainerClasses(maxHeight?: string, className?: string): string {
    const classes = ['overflow-x-auto'];
    
    if (maxHeight && maxHeight !== 'none') {
      classes.push('overflow-y-auto');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  }

  /**
   * Получить CSS-классы для основной таблицы
   */
  static getTableClasses(variant?: DataTableVariant, tableClass?: string): string {
    const classes = [
      'min-w-full',
      'divide-y',
      'divide-[--color-border-default]'
    ];

    // Добавляем классы в зависимости от варианта
    switch (variant) {
      case 'bordered':
        classes.push('border', 'border-[--color-border-default]');
        break;
      case 'compact':
        classes.push('text-[--text-size-sm]');
        break;
      default:
        break;
    }

    if (tableClass) {
      classes.push(tableClass);
    }

    return classes.join(' ');
  }

  /**
   * Получить CSS-классы для заголовка таблицы
   */
  static getTheadClasses(theadClass?: string): string {
    return [
      'bg-[--color-surface-secondary]',
      'text-[--color-text-secondary]'
    ].concat(theadClass ? [theadClass] : []).join(' ');
  }

  /**
   * Получить CSS-классы для строки заголовка
   */
  static getHeaderRowClasses(): string {
    return 'divide-x divide-[--color-border-default]';
  }

  /**
   * Получить CSS-классы для ячейки заголовка
   */
  static getHeaderCellClasses(isSortable: boolean, baseClass?: string): string {
    const classes = [
      'px-6',
      'py-3',
      'text-left',
      'text-[--text-size-xs]',
      'font-medium',
      'uppercase',
      'tracking-wider',
      'text-[--color-text-secondary]'
    ];

    if (isSortable) {
      classes.push(
        'cursor-pointer',
        'hover:bg-[--color-surface-hover]'
      );
    }

    if (baseClass) {
      classes.push(baseClass);
    }

    return classes.join(' ');
  }

  /**
   * Получить CSS-классы для тела таблицы
   */
  static getTbodyClasses(tbodyClass?: string): string {
    return [
      'divide-y',
      'divide-[--color-border-default]'
    ].concat(tbodyClass ? [tbodyClass] : []).join(' ');
  }

  /**
   * Получить CSS-классы для строки данных
   */
  static getRowClasses(
    isStriped: boolean, 
    isHoverable: boolean, 
    rowIndex: number, 
    trClass?: string
  ): string {
    const classes = [];

    // Полосатое выделение
    if (isStriped && rowIndex % 2 === 0) {
      classes.push('bg-[--color-surface-primary]');
    } else {
      classes.push('bg-[--color-surface-secondary]');
    }

    // Подсветка при наведении
    if (isHoverable) {
      classes.push('hover:bg-[--color-surface-hover]');
    }

    if (trClass) {
      classes.push(trClass);
    }

    return classes.join(' ');
  }

  /**
   * Получить CSS-классы для ячейки данных
   */
  static getCellClasses(baseClass?: string): string {
    return [
      'px-6',
      'py-4',
      'whitespace-nowrap',
      'text-[--text-size-sm]',
      'text-[--color-text-primary]'
    ].concat(baseClass ? [baseClass] : []).join(' ');
  }

  /**
   * Получить CSS-классы для иконки сортировки
   */
  static getSortIconClasses(): string {
    return 'w-4 h-4 ml-1 text-[--color-text-secondary]';
  }
}