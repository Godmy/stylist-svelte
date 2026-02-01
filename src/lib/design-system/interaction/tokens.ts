import { ACCESSIBILITY_CLASSES, BASE_CLASSES, DEFAULT_FLAGS, STATE_CLASSES } from '../tokens/classes';
import { COMPONENT_SIZE_SCALE, COMPACT_SIZE_SCALE, ICON_SIZES, SIZE_CLASSES } from '../tokens/sizes';
import { INTERACTIVE_VARIANTS, VARIANT_CLASSES } from '../tokens/interaction';

/**
 * Базовый CSS класс для интерактивных элементов
 */
export const INTERACTIVE_BASE_CLASS = BASE_CLASSES.interactive;

/**
 * Объединенные токены для интерактивных компонентов
 * Содержит все необходимые токены для создания интерактивных компонентов
 */
export const INTERACTION_TOKENS = {
  /**
   * Доступные варианты для интерактивных компонентов
   */
  INTERACTIVE_VARIANTS,
  /**
   * Стандартная шкала размеров компонентов
   */
  COMPONENT_SIZE_SCALE,
  /**
   * Компактная шкала размеров компонентов
   */
  COMPACT_SIZE_SCALE,
  /**
   * Стандартные флаги состояний компонентов
   */
  DEFAULT_FLAGS,
  /**
   * CSS классы для различных состояний компонентов
   */
  STATE_CLASSES,
  /**
   * Базовый CSS класс для интерактивных элементов
   */
  INTERACTIVE_BASE_CLASS,
  /**
   * CSS классы для обеспечения доступности
   */
  ACCESSIBILITY_CLASSES,
  /**
   * Сопоставления вариантов с CSS классами
   */
  VARIANT_CLASSES,
  /**
   * CSS классы для различных размеров
   */
  SIZE_CLASSES,
  /**
   * CSS классы для размеров иконок
   */
  ICON_SIZES
} as const;
