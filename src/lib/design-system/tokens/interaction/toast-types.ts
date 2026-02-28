export const TOAST_TYPES = ['info', 'success', 'warning', 'error'] as const;

export type ToastType = (typeof TOAST_TYPES)[number];
