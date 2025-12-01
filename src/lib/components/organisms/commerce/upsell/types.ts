/**
 * Типы и интерфейсы для компонента Upsell
 * 
 * Следует принципам SOLID:
 * - SRP: Все типы относятся исключительно к Upsell
 * - OCP: Легко расширяемы новыми значениями
 * - LSP: Совместимы с базовыми типами
 * - ISP: Только нужные определения
 * - DIP: Зависит от абстракций
 */

/** Интерфейс продукта для Upsell */
export interface IUpsellProduct {
  /** Уникальный идентификатор продукта */
  id: string;
  /** Название продукта */
  name: string;
  /** Описание продукта */
  description?: string;
  /** Цена продукта */
  price: number;
  /** Оригинальная цена (для отображения скидки) */
  originalPrice?: number;
  /** URL миниатюры изображения */
  thumbnail?: string;
  /** Рейтинг продукта (0-5) */
  rating?: number;
  /** Количество отзывов */
  reviewCount?: number;
  /** В наличии ли продукт */
  inStock?: boolean;
  /** Является ли продукт рекомендуемым */
  isRecommended?: boolean;
  /** Категория продукта */
  category?: string;
  /** Процент скидки */
  discountPercent?: number;
  /** Теги продукта */
  tags?: string[];
}

/** Варианты отображения компонента */
export type UpsellVariant = 'default' | 'compact' | 'minimal';

/** Дополнительные классы для кастомизации */
export interface IUpsellClasses {
  /** Класс для корневого элемента */
  hostClass?: string;
  /** Класс для заголовка */
  headerClass?: string;
  /** Класс для списка продуктов */
  productListClass?: string;
  /** Класс для карточки продукта */
  productCardClass?: string;
}

/** Опциональные отображения элементов */
export interface IUpsellDisplayOptions {
  /** Показывать ли сэкономленную сумму */
  showSavings?: boolean;
  /** Показывать ли причину рекомендации */
  showReason?: boolean;
}

/** Обработчики событий */
export interface IUpsellEventHandlers {
  /** Обработчик при выборе продукта для апгрейда */
  onProductUpgrade?: (product: IUpsellProduct) => void;
  /** Обработчик при добавлении продукта в корзину */
  onProductAddToCart?: (product: IUpsellProduct) => void;
}

/** Опции поведения компонента */
export interface IUpsellBehaviorOptions {
  /** Заголовок секции */
  title?: string;
  /** Описание секции */
  description?: string;
  /** Максимальное количество отображаемых продуктов */
  maxProducts?: number;
  /** Валюта для форматирования цен */
  currency?: string;
  /** Локаль для форматирования цен */
  locale?: string;
}

/** Основной интерфейс пропсов компонента */
export interface IUpsellProps extends IUpsellClasses,
  IUpsellDisplayOptions,
  IUpsellEventHandlers,
  IUpsellBehaviorOptions {
  /** Текущий продукт (от которого идут апгрейды) */
  currentProduct: IUpsellProduct;
  /** Массив продуктов для апгрейда */
  upsellProducts: IUpsellProduct[];
  /** Вариант отображения компонента */
  variant?: UpsellVariant;
  /** Дополнительные атрибуты для корневого элемента */
  [key: string]: any;
}

// Типы для story showcase
export type UpsellStoryScenario = {
  id: string;
  name: string;
  summary: string;
  highlight?: string;
  currentProduct: IUpsellProduct;
  products: IUpsellProduct[];
  badge?: string;
  compact?: boolean;
};