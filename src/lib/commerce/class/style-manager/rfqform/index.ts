/**
 * Менеджер стилей для компонента RFQForm
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class RFQFormStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getHeaderClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-b px-6 py-4';
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
    return 'mt-1 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера формы
   */
  static getFormContainerClasses(): string {
    return 'p-6 space-y-6';
  }

  /**
   * Получает CSS-классы для секции формы
   */
  static getFormSectionClasses(): string {
    return 'space-y-4';
  }

  /**
   * Получает CSS-классы для заголовка секции
   */
  static getSectionTitleClasses(): string {
    return 'text-base font-medium text-[--color-text-primary] mb-3 flex items-center';
  }

  /**
   * Получает CSS-классы для группы полей
   */
  static getFieldGroupClasses(): string {
    return 'grid grid-cols-1 sm:grid-cols-2 gap-4';
  }

  /**
   * Получает CSS-классы для метки поля
   */
  static getLabelClasses(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-1';
  }

  /**
   * Получает CSS-классы для поля ввода
   */
  static getInputClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для текстовой области
   */
  static getTextAreaClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для селектора
   */
  static getSelectClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для контейнера продуктов
   */
  static getProductsContainerClasses(): string {
    return 'space-y-4';
  }

  /**
   * Получает CSS-классы для элемента продукта
   */
  static getProductItemClasses(): string {
    return 'border rounded-lg p-4';
  }

  /**
   * Получает CSS-классы для названия продукта
   */
  static getProductNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера действий продукта
   */
  static getProductActionsClasses(): string {
    return 'mt-3 flex justify-end';
  }

  /**
   * Получает CSS-классы для кнопки добавления продукта
   */
  static getAddProductButtonClasses(): string {
    return 'inline-flex items-center px-3 py-2 border border-[--color-border-primary] rounded-md text-sm font-medium text-[--color-text-primary] bg-[--color-background-secondary] hover:bg-[--color-background-tertiary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для контейнера вложений
   */
  static getAttachmentsContainerClasses(): string {
    return 'mt-2';
  }

  /**
   * Получает CSS-классы для элемента вложения
   */
  static getAttachmentItemClasses(): string {
    return 'flex items-center justify-between py-2 px-3 bg-[--color-background-secondary] rounded-md';
  }

  /**
   * Получает CSS-классы для названия вложения
   */
  static getAttachmentNameClasses(): string {
    return 'text-sm text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для кнопки удаления вложения
   */
  static getRemoveAttachmentButtonClasses(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-danger-600]';
  }

  /**
   * Получает CSS-классы для контейнера действий формы
   */
  static getFormActionsClasses(): string {
    return 'mt-6 flex flex-wrap gap-3 justify-end border-t border-[--color-border-primary] pt-6';
  }

  /**
   * Получает CSS-классы для кнопки отправки
   */
  static getSubmitButtonClasses(): string {
    return 'inline-flex items-center px-6 py-3 bg-[--color-primary-600] text-[--color-text-inverse] font-medium rounded-md hover:bg-[--color-primary-700] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для кнопки отмены
   */
  static getCancelButtonClasses(): string {
    return 'inline-flex items-center px-6 py-3 bg-[--color-background-secondary] text-[--color-text-primary] font-medium rounded-md hover:bg-[--color-background-tertiary] focus:outline-none focus:ring-2 focus:ring-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для обязательного поля
   */
  static getRequiredMarkClasses(): string {
    return 'text-[--color-danger-600] ml-1';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }

  /**
   * Получает CSS-классы для сообщения об ошибке
   */
  static getErrorClasses(): string {
    return 'mt-1 text-sm text-[--color-danger-600]';
  }

  /**
   * Получает CSS-классы для чекбокса
   */
  static getCheckboxClasses(): string {
    return 'h-4 w-4 rounded border-[--color-border-primary] text-[--color-primary-600] focus:ring-blue-500';
  }
}
