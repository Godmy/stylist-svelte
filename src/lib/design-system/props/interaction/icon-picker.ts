import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IIconItem
 * @description Определяет структуру элемента иконки для IconPicker компонента
 * Следует принципу единственной ответственности (SRP) - определяет только структуру данных
 */
export interface IIconItem {
  /** Уникальное имя иконки */
  name: string;
  /** Компонент иконки (any из-за сложного типа компонентов Svelte) */
  component: any;
  /** Категория иконки (опционально) */
  category?: string;
  /** Ключевые слова для поиска (опционально) */
  keywords?: string[];
}

/**
 * @interface IIconPickerRestProps
 * @description Определяет остальные свойства компонента, исключая class
 * Следует принципу открытости/закрытости (OCP) - можно расширять без изменения
 */
export type IIconPickerRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

/**
 * @interface IIconPickerProps
 * @description Основной интерфейс свойств компонента IconPicker
 * Следует принципу подстановки Лисков (LSP) - можно использовать производные типы
 */
export interface IIconPickerProps extends IIconPickerRestProps {
  /** Массив иконок для отображения */
  icons: IIconItem[];
  /** Заголовок компонента */
  title?: string;
  /** Плейсхолдер для поля поиска */
  searchPlaceholder?: string;
  /** Выбранная иконка */
  selectedIcon?: string;
  /** Количество колонок для отображения иконок */
  columns?: number;
  /** CSS класс для основного контейнера */
  class?: string;
  /** CSS класс для элемента иконки */
  itemClass?: string;
  /** CSS класс для заголовка */
  headerClass?: string;
  /** Обработчик выбора иконки */
  onIconSelect?: (icon: IIconItem) => void;
  /** Показывать ли поле поиска */
  showSearch?: boolean;
  /** Показывать ли категории */
  showCategories?: boolean;
}

/**
 * @type TColumns
 * @description Тип для количества колонок
 * Следует принципу инверсии зависимостей (DIP) - абстракции не зависят от деталей
 */
export type TColumns = 2 | 3 | 4 | 5 | 6 | 7 | 8;