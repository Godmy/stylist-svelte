/**
 * Типы для компонента AdvancedInput
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Пропсы компонента AdvancedInput */
export interface IAdvancedInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  onInput?: (value: string) => void;
  class?: string;
}