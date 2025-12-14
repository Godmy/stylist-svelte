import type { STATE_CLASSES } from '../tokens/classes';

type StateClasses = typeof STATE_CLASSES;

/**
 * Базовый контракт пресета для интерактивных компонентов.
 */
export interface Preset<V extends string, S extends string> {
  variants: readonly V[];
  sizes: readonly S[];
  defaults: {
    variant: V;
    size: S;
    disabled: boolean;
    block?: boolean;
  };
  classes: {
    base: string;
    size: Record<S, string>;
    variant: Record<V, string>;
    state: StateClasses;
    focusVisible?: string;
  };
}
