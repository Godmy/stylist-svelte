/**
 * Менеджер стилей для компонента OrderConfirmation
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только управление стилями компонента
 * - Не содержит бизнес-логики
 * - Генерирует CSS-классы на основе входных параметров
 */

/**
 * @class OrderConfirmationStyleManager
 * @description Класс для управления стилями компонента OrderConfirmation
 */
export class OrderConfirmationStyleManager {
  /**
   * Возвращает основные CSS-классы для компонента
   * @param {string} additionalClass - дополнительные CSS-классы
   * @returns {string} строка с CSS-классами
   */
  static getBaseClasses(additionalClass: string = ''): string {
    return `order-confirmation ${additionalClass}`.trim();
  }

  /**
   * Возвращает CSS-классы для контейнера подтверждения заказа
   * @returns {string} строка с CSS-классами
   */
  static getContainerClasses(): string {
    return 'max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8';
  }

  /**
   * Возвращает CSS-классы для заголовка
   * @param {string} headerClass - дополнительные CSS-классы для заголовка
   * @returns {string} строка с CSS-классами
   */
  static getHeaderClasses(headerClass: string = ''): string {
    return `mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${headerClass}`.trim();
  }

  /**
   * Возвращает CSS-классы для статуса заказа
   * @param {string} orderStatus - статус заказа
   * @returns {string} строка с CSS-классами
   */
  static getOrderStatusClasses(orderStatus: 'processing' | 'shipped' | 'delivered' | 'cancelled'): string {
    switch (orderStatus) {
      case 'processing':
        return 'text-yellow-800 bg-yellow-100';
      case 'shipped':
        return 'text-blue-800 bg-blue-100';
      case 'delivered':
        return 'text-green-800 bg-green-100';
      case 'cancelled':
        return 'text-red-800 bg-red-100';
      default:
        return 'text-gray-800 bg-gray-100';
    }
  }

  /**
   * Возвращает CSS-классы для основного контейнера заказа
   * @returns {string} строка с CSS-классами
   */
  static getOrderContainerClasses(): string {
    return 'bg-white shadow overflow-hidden sm:rounded-lg';
  }

  /**
   * Возвращает CSS-классы для заголовка секции заказа
   * @returns {string} строка с CSS-классами
   */
  static getOrderHeaderClasses(): string {
    return 'px-4 py-5 sm:px-6 border-b border-gray-200';
  }

  /**
   * Возвращает CSS-классы для содержимого заказа
   * @returns {string} строка с CSS-классами
   */
  static getOrderContentClasses(): string {
    return 'px-4 py-5 sm:p-6';
  }

  /**
   * Возвращает CSS-классы для сетки основного содержимого
   * @returns {string} строка с CSS-классами
   */
  static getMainGridClasses(): string {
    return 'grid grid-cols-1 md:grid-cols-3 gap-8';
  }

  /**
   * Возвращает CSS-классы для секции деталей заказа
   * @param {string} summaryClass - дополнительные CSS-классы для секции
   * @returns {string} строка с CSS-классами
   */
  static getOrderDetailsClasses(summaryClass: string = ''): string {
    return `${summaryClass}`.trim();
  }

  /**
   * Возвращает CSS-классы для секции адреса доставки
   * @param {string} addressClass - дополнительные CSS-классы для секции
   * @returns {string} строка с CSS-классами
   */
  static getShippingAddressClasses(addressClass: string = ''): string {
    return `bg-gray-50 rounded-md p-4 ${addressClass}`.trim();
  }

  /**
   * Возвращает CSS-классы для статуса оплаты
   * @param {'paid' | 'pending' | 'failed'} paymentStatus - статус оплаты
   * @returns {string} строка с CSS-классами
   */
  static getPaymentStatusClasses(paymentStatus: 'paid' | 'pending' | 'failed'): string {
    switch (paymentStatus) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  /**
   * Возвращает CSS-классы для кнопок действий
   * @param {string} actionsClass - дополнительные CSS-классы для кнопок
   * @returns {string} строка с CSS-классами
   */
  static getActionButtonsClasses(actionsClass: string = ''): string {
    return `mt-8 flex flex-wrap gap-3 justify-center ${actionsClass}`.trim();
  }
}