/**
 * Типы для компонента AddressForm
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { HTMLAttributes } from 'svelte/elements';

/** Адрес */
export type Address = {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
};

/** Опция страны */
export type CountryOption = {
  value: string;
  label: string;
};

/** Пропсы компонента AddressForm */
export interface IAddressFormProps extends Omit<HTMLAttributes<HTMLFormElement>, 'class'> {
  class?: string;
  formClass?: string;
  fieldClass?: string;
  value?: Address;
  onInput?: (address: Address) => void;
  onChange?: (address: Address) => void;
  required?: boolean;
  disabled?: boolean;
  countryOptions?: CountryOption[];
}