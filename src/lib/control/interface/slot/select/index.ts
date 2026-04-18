/**
 * Select types and interfaces following SOLID principles
 */

import type { HTMLSelectAttributes } from 'svelte/elements';
import type { SlotSelectOption } from '$stylist/control/interface/slot/select-option';

export interface SlotSelect extends HTMLSelectAttributes {
  id: string;
  label: string;
  value?: string;
  options: SlotSelectOption[];
  errors?: string[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  class?: string;
}
