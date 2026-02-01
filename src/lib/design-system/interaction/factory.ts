/**
 * Фабрика пресетов для интерактивных компонентов (слой дизайн-системы)
 */
import type { Preset } from './preset';
import type { ComponentSize, InteractiveVariant } from '../tokens';
import {
  INTERACTIVE_VARIANTS,
  VARIANT_CLASSES
} from '../tokens/interaction';
import {
  COMPONENT_SIZE_SCALE,
  SIZE_CLASSES
} from '../tokens/sizes';
import {
  STATE_CLASSES,
  ACCESSIBILITY_CLASSES,
  BASE_CLASSES,
  DEFAULT_FLAGS
} from '../tokens/classes';

/**
 * Создает пресет для интерактивного компонента с заданной конфигурацией
 * @param config Конфигурация пресета (опционально)
 * @returns Пресет с заданными или стандартными значениями
 */
export function createPreset(
  config: Partial<{
    /**
     * Доступные варианты компонента
     */
    variants: readonly string[];
    /**
     * Доступные размеры компонента
     */
    sizes: readonly string[];
    /**
     * Переопределения значений по умолчанию
     */
    defaults: Partial<Preset<any, any>['defaults']>;
    /**
     * Переопределения CSS классов
     */
    classes: Partial<Preset<any, any>['classes']>;
  }> = {}
): Preset<InteractiveVariant, ComponentSize> {
  return {
    variants: (config.variants as readonly InteractiveVariant[]) ?? INTERACTIVE_VARIANTS,
    sizes: (config.sizes as readonly ComponentSize[]) ?? COMPONENT_SIZE_SCALE,
    defaults: {
      variant: 'primary' as InteractiveVariant,
      size: 'md' as ComponentSize,
      disabled: DEFAULT_FLAGS.disabled,
      block: false,
      ...config.defaults
    },
    classes: {
      base: BASE_CLASSES.interactive,
      variant: VARIANT_CLASSES,
      state: STATE_CLASSES,
      focusVisible: ACCESSIBILITY_CLASSES.focusVisible,
      size: SIZE_CLASSES,
      ...config.classes
    }
  };
}
