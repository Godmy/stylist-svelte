import type { TokenSize } from '$stylist/layout/type/enum/size';

export type SwitchStateProps = {
  id?: string;
  label?: string;
  description?: string;
  size?: TokenSize;
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  class?: string;
  ariaLabel?: string;
};
