/**
 * Типы для компонента AdvancedPasswordInput
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { HTMLAttributes } from 'svelte/elements';

/** Пропсы компонента AdvancedPasswordInput */
export interface IAdvancedPasswordInputProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  class?: string;
  inputClass?: string;
  buttonClass?: string;
  showStrengthMeter?: boolean;
  onValueInput?: (value: string) => void;
  onValueChange?: (value: string) => void;
  /** @deprecated use onValueInput */
  onInput?: (value: string) => void;
  /** @deprecated use onValueChange */
  onChange?: (value: string) => void;
}
