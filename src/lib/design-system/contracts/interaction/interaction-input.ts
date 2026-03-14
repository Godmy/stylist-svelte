import type { HTMLAttributes, HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import type { Translation } from '$stylist/design-system/tokens/information/translations';

import type { DateRangeValue, DateTimeRangeValue } from '../../types/interaction/interaction-input';
export interface DateRangePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput' | 'value'> {
  value?: DateRangeValue;
  disabled?: boolean;
  placeholder?: string;
  class?: string;
  calendarClass?: string;
  inputClass?: string;
  buttonClass?: string;
  onInput?: (value: DateRangeValue) => void;
  onChange?: (value: DateRangeValue) => void;
}

export interface DateTimeRangePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput' | 'value'> {
  value?: DateTimeRangeValue;
  disabled?: boolean;
  placeholder?: string;
  class?: string;
  calendarClass?: string;
  inputClass?: string;
  buttonClass?: string;
  onInput?: (value: DateTimeRangeValue) => void;
  onChange?: (value: DateTimeRangeValue) => void;
}


