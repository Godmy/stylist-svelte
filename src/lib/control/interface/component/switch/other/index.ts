import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';

/**
 * Switch Props
 * Used for toggle switch controls
 */
export interface SwitchProps extends Omit<InteractionHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Label for the switch */
  label?: string;
  /** Description for the switch */
  description?: string;
  /** Whether the switch is required */
  required?: boolean;
  /** Custom class name */
  class?: string;
  /** Callback when switch changes */
  onChange?: (checked: boolean) => void;
  /** Size of the switch */
  switchSize?: TokenSize;
  /** Size variant */
  size?: TokenSize;
}




