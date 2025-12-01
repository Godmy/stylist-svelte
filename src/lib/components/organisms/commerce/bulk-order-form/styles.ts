/**
 * Менеджер стилей для компонента BulkOrderForm
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный класс отвечает только за генерацию CSS-классов для компонента BulkOrderForm
 */

export class BulkOrderFormStyleManager {
  /**
   * Получает CSS-классы для основного контейнера формы
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bulk-order-form';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка формы
   */
  static getHeaderClasses(additionalClass: string = ''): string {
    const baseClasses = 'mb-6 flex items-center';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'mt-1 text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для основной формы
   */
  static getFormClasses(additionalClass: string = ''): string {
    const baseClasses = 'border rounded-lg p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для формы выбора продукта
   */
  static getProductSelectionFormClasses(): string {
    return 'grid grid-cols-1 md:grid-cols-4 gap-4 mb-6';
  }

  /**
   * Получает CSS-классы для ячеек формы выбора продукта
   */
  static getProductSelectionCellClasses(colSpan: number = 1): string {
    switch(colSpan) {
      case 2:
        return 'md:col-span-2';
      default:
        return '';
    }
  }

  /**
   * Получает CSS-классы для метки
   */
  static getLabelClasses(): string {
    return 'block text-sm font-medium text-[--color-text-secondary] mb-1';
  }

  /**
   * Получает CSS-классы для выпадающего списка
   */
  static getSelectClasses(): string {
    return 'block w-full pl-3 pr-10 py-2 text-base border-[--color-border-base] focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm rounded-md';
  }

  /**
   * Получает CSS-классы для инпута
   */
  static getInputClasses(): string {
    return 'block w-full pl-3 pr-12 py-2 sm:text-sm border-[--color-border-base] rounded-md focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для области файла
   */
  static getFileAreaClasses(): string {
    return 'mb-6 flex items-center';
  }

  /**
   * Получает CSS-классы для списка элементов заказа
   */
  static getItemsListClasses(): string {
    return 'mb-6';
  }

  /**
   * Получает CSS-классы для заголовка списка элементов
   */
  static getItemsListTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary] mb-4';
  }

  /**
   * Получает CSS-классы для пустого состояния
   */
  static getEmptyStateClasses(): string {
    return 'text-center py-8 border-2 border-dashed rounded-lg';
  }

  /**
   * Получает CSS-классы для контейнера отдельного элемента
   */
  static getItemContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'border rounded-lg p-4 flex items-center';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для области изображения элемента
   */
  static getItemImageAreaClasses(): string {
    return 'flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-[--color-surface-secondary]';
  }

  /**
   * Получает CSS-классы для изображения
   */
  static getItemImageClasses(): string {
    return 'w-full h-full object-cover';
  }

  /**
   * Получает CSS-классы для иконки изображения по умолчанию
   */
  static getDefaultImageIconClasses(): string {
    return 'w-full h-full flex items-center justify-center text-[--color-text-tertiary]';
  }

  /**
   * Получает CSS-классы для названия продукта
   */
  static getItemNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary] truncate';
  }

  /**
   * Получает CSS-классы для цены продукта
   */
  static getItemPriceClasses(): string {
    return 'ml-4 text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для цены
   */
  static getItemTextPriceClasses(): string {
    return 'mt-1 flex items-center text-xs text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для зачеркнутой цены
   */
  static getStrikethroughPriceClasses(): string {
    return 'ml-2 line-through text-[--color-text-tertiary]';
  }

  /**
   * Получает CSS-классы для примечания
   */
  static getItemNoteClasses(): string {
    return 'mt-2 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для области количества
   */
  static getQuantityAreaClasses(): string {
    return 'mt-2 flex items-center';
  }

  /**
   * Получает CSS-классы для контейнера изменения количества
   */
  static getQuantityChangeContainerClasses(): string {
    return 'flex items-center border rounded-md';
  }

  /**
   * Получает CSS-классы для кнопки изменения количества
   */
  static getQuantityChangeButtonClasses(): string {
    return 'p-1 text-[--color-text-secondary] hover:text-[--color-text-primary] focus:outline-none';
  }

  /**
   * Получает CSS-классы для инпута количества
   */
  static getQuantityInputClasses(): string {
    return 'w-12 text-center border-y-0 border-[--color-border-base] focus:outline-none';
  }

  /**
   * Получает CSS-классы для кнопки удаления
   */
  static getRemoveButtonClasses(): string {
    return 'ml-4 flex items-center text-sm font-medium text-[--color-error-600] hover:text-[--color-error-500]';
  }

  /**
   * Получает CSS-классы для разделителя
   */
  static getDividerClasses(): string {
    return 'border-t border-[--color-border-divider] pt-6';
  }

  /**
   * Получает CSS-классы для итоговой суммы
   */
  static getTotalClasses(): string {
    return 'flex justify-between text-base font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для области действий
   */
  static getActionsAreaClasses(additionalClass: string = ''): string {
    const baseClasses = 'mt-6 flex justify-end space-x-3';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }
}