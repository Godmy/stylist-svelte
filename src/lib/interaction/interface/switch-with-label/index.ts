import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';

type LabelPosition = TokenAlignment;
/** Props interface for SwitchWithLabel component */
export interface ISwitchWithLabelProps {
  /**
   * Whether the switch is checked
   * @default false
   */
  checked?: boolean;
  
  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Label text for the switch
   */
  label: string;
  
  /**
   * Position of the label relative to the switch
   * @default 'right'
   */
  labelPosition?: LabelPosition;
  
  /**
   * Additional CSS classes to apply to the container
   */
  class?: string;
  
  /**
   * Additional CSS classes to apply to the switch element
   */
  switchClass?: string;
  
  /**
   * Additional CSS classes to apply to the label element
   */
  labelClass?: string;
  
  /**
   * Canonical callback function triggered when input updates
   */
  onValueInput?: (checked: boolean) => void;

  /**
   * Canonical callback function triggered when value is committed/changed
   */
  onValueChange?: (checked: boolean) => void;

  /**
   * Legacy callback function triggered when the switch input value changes
   * @deprecated use onValueInput
   */
  onInput?: (checked: boolean) => void;
  
  /**
   * Legacy callback function triggered when the switch value changes
   * @deprecated use onValueChange
   */
  onChange?: (checked: boolean) => void;
}




