/**
 * PasswordInput types and interfaces following SOLID principles
 */

import type { HTMLInputAttributes } from 'svelte/elements';

export interface IPasswordInputProps extends HTMLInputAttributes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helpText?: string;
}

export const getPasswordInputContainerClass = (error: boolean) => {
  return `relative ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-primary]'}`;
};

export const getPasswordInputClass = (error: boolean, disabled: boolean) => {
  return `w-full pr-10 py-2 px-3 border ${error ? 'border-[--color-danger-500]' : 'border-[--color-border-primary]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] ${disabled ? 'bg-[--color-background-disabled] cursor-not-allowed' : 'bg-[--color-background-surface]'}`;
};

export const getPasswordInputToggleButtonClass = (disabled: boolean) => {
  return `absolute inset-y-0 right-0 flex items-center pr-3 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;
};

export const getPasswordInputHelpTextClass = (error: boolean) => {
  return `mt-1 text-sm ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-secondary]'}`;
};

