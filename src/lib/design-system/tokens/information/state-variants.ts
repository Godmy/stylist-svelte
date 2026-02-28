/** State variants. */
export const STATE_VARIANTS = ['error', 'valid', 'disabled', 'readonly', 'loading'] as const;
export type StateVariant = (typeof STATE_VARIANTS)[number];
