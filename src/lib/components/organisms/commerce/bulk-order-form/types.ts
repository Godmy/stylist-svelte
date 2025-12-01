/**
 * Типы для компонента BulkOrderForm
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный файл отвечает только за типизацию компонента BulkOrderForm
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Интерфейс продукта
 */
export interface IProduct {
  /**
   * Уникальный идентификатор продукта
   */
  id: string;
  
  /**
   * Название продукта
   */
  name: string;
  
  /**
   * Описание продукта
   */
  description?: string;
  
  /**
   * Цена продукта
   */
  price: number;
  
  /**
   * Первоначальная цена продукта (до скидки)
   */
  originalPrice?: number;
  
  /**
   * URL-адрес миниатюры продукта
   */
  thumbnail?: string;
  
  /**
   * Наличие продукта в наличии
   */
  inStock?: boolean;
  
  /**
   * Количество продукта на складе
   */
  stockCount?: number;
  
  /**
   * Категория продукта
   */
  category?: string;
  
  /**
   * Минимальное количество для заказа
   */
  minOrderQuantity?: number;
}

/**
 * Интерфейс элемента заказа
 */
export interface IBulkOrderItem {
  /**
   * Уникальный идентификатор элемента заказа
   */
  id: string;
  
  /**
   * ID связанного продукта
   */
  productId: string;
  
  /**
   * Количество продукта
   */
  quantity: number;
  
  /**
   * Цена продукта
   */
  price: number;
  
  /**
   * Примечание к элементу заказа
   */
  note?: string;
}

/**
 * Интерфейс пропсов компонента BulkOrderForm
 */
export interface IBulkOrderFormProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Список доступных продуктов
   */
  products: IProduct[];
  
  /**
   * Начальные элементы заказа
   * @default []
   */
  initialItems?: IBulkOrderItem[];
  
  /**
   * Заголовок формы
   * @default 'Bulk Order'
   */
  title?: string;
  
  /**
   * Описание формы
   * @default 'Add multiple products to your order'
   */
  description?: string;
  
  /**
   * Показывать ли общую сумму
   * @default true
   */
  showTotal?: boolean;
  
  /**
   * Показывать ли примечания
   * @default true
   */
  showNotes?: boolean;
  
  /**
   * Разрешить загрузку файлов
   * @default true
   */
  allowFileUpload?: boolean;
  
  /**
   * Дополнительный CSS класс для контейнера
   */
  class?: string;
  
  /**
   * Дополнительный CSS класс для заголовка
   */
  headerClass?: string;
  
  /**
   * Дополнительный CSS класс для формы
   */
  formClass?: string;
  
  /**
   * Дополнительный CSS класс для отдельных элементов
   */
  itemClass?: string;
  
  /**
   * Дополнительный CSS класс для действий
   */
  actionsClass?: string;
  
  /**
   * Обработчик отправки заказа
   */
  onOrderSubmit?: (items: IBulkOrderItem[]) => void;
  
  /**
   * Обработчик изменения элементов заказа
   */
  onItemsChange?: (items: IBulkOrderItem[]) => void;
  
  /**
   * Валюта для отображения цен
   * @default 'USD'
   */
  currency?: string;
  
  /**
   * Локаль для форматирования чисел
   * @default 'en-US'
   */
  locale?: string;
}