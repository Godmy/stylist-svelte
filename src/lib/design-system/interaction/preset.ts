import type { STATE_CLASSES } from '../tokens/classes';

type StateClasses = typeof STATE_CLASSES;

/**
 * Базовый контракт пресета для интерактивных компонентов
 * Определяет структуру, которую должен реализовать каждый пресет компонента
 * @template V Тип вариантов компонента (например, 'primary', 'secondary')
 * @template S Тип размеров компонента (например, 'sm', 'md', 'lg')
 */
export interface Preset<V extends string, S extends string> {
  /**
   * Доступные варианты компонента
   */
  variants: readonly V[];

  /**
   * Доступные размеры компонента
   */
  sizes: readonly S[];

  /**
   * Значения по умолчанию для компонента
   */
  defaults: {
    /**
     * Вариант по умолчанию
     */
    variant: V;
    /**
     * Размер по умолчанию
     */
    size: S;
    /**
     * Состояние отключения по умолчанию
     */
    disabled: boolean;
    /**
     * Флаг блочного отображения (опционально)
     */
    block?: boolean;
  };

  /**
   * CSS классы для различных состояний компонента
   */
  classes: {
    /**
     * Базовые классы, применяемые ко всем экземплярам компонента
     */
    base: string;
    /**
     * Классы, специфичные для каждого размера
     */
    size: Record<S, string>;
    /**
     * Классы, специфичные для каждого варианта
     */
    variant: Record<V, string>;
    /**
     * Классы для различных состояний компонента
     */
    state: StateClasses;
    /**
     * Класс для видимого фокуса (опционально)
     */
    focusVisible?: string;
  };
}
