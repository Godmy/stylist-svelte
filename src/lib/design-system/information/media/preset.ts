/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */
import type { MediaSize } from './index';

// Тип для пресета медиа-компонента
export type MediaPreset<V extends string, S extends MediaSize> = {
  variants: Record<V, string>;
  sizes: Record<S, string>;
  defaults: {
    variant: V;
    size: S;
    disabled: boolean;
    block: boolean;
  };
};

// Тип для пропсов
export type MediaProps<V extends string, S extends MediaSize> = {
  variant?: V;
  size?: S;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  ariaLabel?: string;
};