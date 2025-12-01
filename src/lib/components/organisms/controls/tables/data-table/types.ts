import type { HTMLAttributes } from 'svelte/elements';

/**
 * Конфигурация колонки таблицы
 */
export interface IDataTableColumn {
  /**
   * Ключ для идентификации колонки
   */
  key: string;

  /**
   * Заголовок колонки
   */
  title: string;

  /**
   * Возможность сортировки по этой колонке
   */
  sortable?: boolean;

  /**
   * CSS класс для ячейки
   */
  cellClass?: string;

  /**
   * CSS класс для заголовка
   */
  headerClass?: string;

  /**
   * Функция рендеринга для ячейки
   */
  render?: (value: any, item: any) => string;
}

/**
 * Конфигурация сортировки
 */
export interface ISortConfig {
  /**
   * Ключ колонки для сортировки
   */
  key: string | null;

  /**
   * Направление сортировки
   */
  direction: 'asc' | 'desc';
}

/**
 * Варианты стилей таблицы
 */
export type DataTableVariant = 'default' | 'compact' | 'striped' | 'bordered';

/**
 * Типы пропсов для компонента DataTable
 */
export interface IDataTableProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Данные для отображения
   */
  data: any[];

  /**
   * Конфигурация колонок
   */
  columns: IDataTableColumn[];

  /**
   * Полосатое выделение строк
   */
  striped?: boolean;

  /**
   * Подсветка строк при наведении
   */
  hoverable?: boolean;

  /**
   * Максимальная высота таблицы
   */
  maxHeight?: string;

  /**
   * CSS класс для контейнера
   */
  class?: string;

  /**
   * CSS класс для таблицы
   */
  tableClass?: string;

  /**
   * CSS класс для заголовка таблицы
   */
  theadClass?: string;

  /**
   * CSS класс для тела таблицы
   */
  tbodyClass?: string;

  /**
   * CSS класс для строки
   */
  trClass?: string;

  /**
   * CSS класс для заголовка колонки
   */
  thClass?: string;

  /**
   * CSS класс для ячейки
   */
  tdClass?: string;

  /**
   * Обработчик клика по строке
   */
  onRowClick?: (item: any) => void;

  /**
   * Вариант отображения таблицы
   */
  variant?: DataTableVariant;
}