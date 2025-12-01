/**
 * Типы для компонента BadgeGroup
 *
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный файл отвечает только за типизацию компонента BadgeGroup
 */

// Импортируем общие типы из атомарного компонента
import type { BadgeVariant, BadgeSize } from '$lib/components/atoms/typography/elements/badge/types';

/**
 * Интерфейс отдельного бейджа
 */
export interface IBadge {
  /**
   * Уникальный идентификатор бейджа
   */
  id: string;

  /**
   * Текст метки бейджа
   */
  label: string;

  /**
   * Вариант стиля бейджа
   * @default 'default'
   */
  variant?: BadgeVariant;

  /**
   * Размер бейджа
   * @default 'md'
   */
  size?: BadgeSize;

  /**
   * Состояние отключения бейджа
   * @default false
   */
  disabled?: boolean;

  /**
   * Обработчик клика по бейджу
   */
  onClick?: () => void;
}

/**
 * Интерфейс пропсов компонента BadgeGroup
 */
export interface IBadgeGroupProps {
  /**
   * Массив бейджей для отображения
   */
  badges: IBadge[];

  /**
   * Максимальное количество видимых бейджей
   * @default 5
   */
  maxVisible?: number;

  /**
   * Показывать ли индикатор переполнения
   * @default true
   */
  showOverflow?: boolean;

  /**
   * Дополнительный CSS класс для контейнера
   */
  class?: string;

  /**
   * Дополнительный CSS класс для отдельных бейджей
   */
  badgeClass?: string;

  /**
   * Дополнительный CSS класс для элемента переполнения
   */
  overflowClass?: string;
}