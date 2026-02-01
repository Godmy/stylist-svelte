import type { IInputProps } from './input-text/types';

export interface IInputFieldProps extends IInputProps {
  helperText?: string;
}

export const getInputFieldContainerClasses = () => {
  return "space-y-1";
};

export const getInputFieldHelperTextClasses = () => {
  return "text-xs text-gray-500";
};

