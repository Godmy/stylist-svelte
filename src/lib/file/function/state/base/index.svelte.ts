/**
 * Base state builder for file domain components
 * Provides consistent state structure without external dependencies
 */

export type FileStateOptions<V extends string, S extends string> = {
  variant?: V;
  size?: S;
  disabled?: boolean;
  class?: string;
};

export type FileStateResult<V extends string, S extends string> = {
  variant: V;
  size: S;
  disabled: boolean;
  classes: string;
};

export function createFileState<V extends string, S extends string>(
  options: FileStateOptions<V, S> & Record<string, unknown>,
  defaults: { variant: V; size: S }
): FileStateResult<V, S> {
  const variant = options.variant ?? defaults.variant;
  const size = options.size ?? defaults.size;
  const disabled = options.disabled ?? false;
  const classes = [options.class || ''].filter(Boolean).join(' ');

  return { variant, size, disabled, classes };
}

export default createFileState;
