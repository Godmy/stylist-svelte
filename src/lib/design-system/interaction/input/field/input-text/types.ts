import type { HTMLInputAttributes } from 'svelte/elements';

export interface IInputProps extends HTMLInputAttributes {
  id: string;
  label: string;
}