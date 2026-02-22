/**
 * Типы для компонента BillingSummary
 *
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный файл отвечает только за типизацию компонента BillingSummary
 */

import type { HtmlAttributesBase } from './common';

/**
 * Возможные статусы элемента счета
 */
export type BillingItemStatus = 'paid' | 'pending' | 'failed' | 'refunded';

/**
 * Возможные статусы всего счета
 */
export type BillingSummaryStatus = 'paid' | 'pending' | 'overdue' | 'cancelled';

/**
 * Интерфейс элемента счета
 */
export interface IBillingItem {
  /**
   * Уникальный идентификатор элемента
   */
  id: string;

  /**
   * Описание элемента
   */
  description: string;

  /**
   * Сумма элемента
   */
  amount: number;

  /**
   * Валюта элемента
   */
  currency: string;

  /**
   * Дата элемента
   */
  date: Date;

  /**
   * Статус элемента
   */
  status: BillingItemStatus;
}

/**
 * Интерфейс пропсов компонента BillingSummary
 */
export interface IBillingSummaryProps extends HtmlAttributesBase<HTMLDivElement> {
  /**
   * Заголовок счета
   * @default 'Billing Summary'
   */
  title?: string;

  /**
   * Подзаголовок счета
   * @default 'Payment summary for your subscription'
   */
  subtitle?: string;

  /**
   * Итоговая сумма
   * @default 0
   */
  totalAmount?: number;

  /**
   * Валюта
   * @default 'USD'
   */
  currency?: string;

  /**
   * Дата оплаты
   */
  dueDate?: Date;

  /**
   * Статус счета
   * @default 'pending'
   */
  status?: BillingSummaryStatus;

  /**
   * Элементы счета
   */
  items: IBillingItem[];

  /**
   * Показывать ли детали
   * @default true
   */
  showDetails?: boolean;

  /**
   * Показывать ли дату оплаты
   * @default true
   */
  showDueDate?: boolean;

  /**
   * Показывать ли статус
   * @default true
   */
  showStatus?: boolean;

  /**
   * Дополнительный CSS класс для контейнера
   */
  class?: string;

  /**
   * Дополнительный CSS класс для заголовка
   */
  headerClass?: string;

  /**
   * Дополнительный CSS класс для сводки
   */
  summaryClass?: string;

  /**
   * Дополнительный CSS класс для элементов
   */
  itemsClass?: string;

  /**
   * Дополнительный CSS класс для нижнего колонтитула
   */
  footerClass?: string;
}
