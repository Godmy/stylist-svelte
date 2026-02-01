export const INPUT_VARIANTS = [
  'default',
  'filled',
  'outlined',
  'ghost',
  'info',
  'success',
  'warning',
  'danger',
  'solid'
] as const;

export type InputVariant = typeof INPUT_VARIANTS[number];
