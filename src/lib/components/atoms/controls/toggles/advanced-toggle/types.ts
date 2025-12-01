/**
 * Типы для компонента AdvancedToggle
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Пропсы компонента AdvancedToggle */
export interface IAdvancedToggleProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  class?: string;
}