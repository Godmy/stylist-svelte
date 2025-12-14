import type { DefaultSizes, DefaultVariants } from './defaults';
import type { Position, Orientation, Position2D } from '../tokens/layout';

export interface IVariant<T extends string = string> {
  variant?: T;
}

export interface ISize<T extends string = string> {
  size?: T;
}

export interface IStyleable<V extends string = string, S extends string = string>
  extends IVariant<V>,
    ISize<S> {
  class?: string;
}

export interface IDisableable {
  disabled?: boolean;
}

export interface ILoadable {
  loading?: boolean;
}

export interface IClickable {
  onclick?: (event: MouseEvent) => void;
}

export interface Props extends IDisableable, ILoadable, IClickable, IStyleable<DefaultVariants, DefaultSizes> {
  class?: string;
  ariaLabel?: string;
  block?: boolean;
  loadingLabel?: string;
  children?: any;
  icon?: any;
}

export type { Position, Orientation, Position2D };
