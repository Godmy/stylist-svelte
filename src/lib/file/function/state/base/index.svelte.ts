import type { FileStateOptions } from '$stylist/file/type/alias/file-state-options';
import type { FileStateResult } from '$stylist/file/type/alias/file-state-result';

/**
 * Base state builder for file domain components
 * Provides consistent state structure without external dependencies
 */

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
