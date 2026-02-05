/**
 * Resolve an option value against a known list with a safe fallback.
 */
export function resolveOption<T extends string>(
  value: T | undefined,
  allowed: readonly T[],
  fallback: T
): T {
  if (!value) return fallback;
  return (allowed as readonly string[]).includes(value) ? value : fallback;
}

/**
 * Normalize character count ratio into a semantic state.
 */
export function getCharacterCountState(ratio: number): 'default' | 'warning' | 'danger' {
  if (ratio >= 0.9) return 'danger';
  if (ratio >= 0.8) return 'warning';
  return 'default';
}

export function getInputGroupContainerClass(): string {
  return 'flex rounded-md shadow-sm';
}

export function getInputGroupInputClass(className = ''): string {
  return `rounded-none rounded-l-md focus:z-10 border-r-0 ${className}`.trim();
}

export function getInputGroupButtonClass(): string {
  return 'rounded-none rounded-r-md -ml-px';
}

export function getInputFieldContainerClass(): string {
  return 'space-y-1';
}

export function getInputFieldHelperTextClass(): string {
  return 'text-xs text-gray-500';
}

export function getSharedPasswordInputContainerClass(error: boolean): string {
  return `relative ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-primary]'}`;
}

export function getSharedPasswordInputClass(error: boolean, disabled: boolean): string {
  return `w-full pr-10 py-2 px-3 border ${error ? 'border-[--color-danger-500]' : 'border-[--color-border-primary]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] ${disabled ? 'bg-[--color-background-disabled] cursor-not-allowed' : 'bg-[--color-background-surface]'}`;
}

export function getSharedPasswordInputToggleButtonClass(disabled: boolean): string {
  return `absolute inset-y-0 right-0 flex items-center pr-3 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;
}

export function getSharedPasswordInputHelpTextClass(error: boolean): string {
  return `mt-1 text-sm ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-secondary]'}`;
}

export function getFileSelectionLabel(value: File | File[] | null | undefined): string {
  if (!value) return '';
  if (Array.isArray(value)) {
    return value.length > 0 ? `${value.length} file(s) selected` : '';
  }
  return value.name || '';
}
