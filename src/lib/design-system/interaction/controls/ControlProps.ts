import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputElement, HTMLTextAreaElement, HTMLSelectElement } from 'svelte/elements';

// Общий интерфейс для элементов управления
export interface ControlProps<T = HTMLElement> extends HTMLAttributes<T> {
  variant?: string;
  size?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  readonly?: boolean;
  class?: string;
  id?: string;
  name?: string;
  value?: any;
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}

// Интерфейс для кнопок
export interface ButtonControlProps extends HTMLButtonAttributes {
  variant?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  class?: string;
  onClick?: () => void;
}

// Интерфейс для полей ввода
export interface InputControlProps extends HTMLAttributes<HTMLInputElement> {
  variant?: string;
  size?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  readonly?: boolean;
  class?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Интерфейс для текстовых областей
export interface TextAreaControlProps extends HTMLAttributes<HTMLTextAreaElement> {
  variant?: string;
  size?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  readonly?: boolean;
  class?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Интерфейс для селектов
export interface SelectControlProps extends HTMLAttributes<HTMLSelectElement> {
  variant?: string;
  size?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  readonly?: boolean;
  class?: string;
  id?: string;
  name?: string;
  value?: string;
  options?: Array<{ value: string; label: string }>;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}