export const TOKEN_LOADING = ['idle', 'loading', 'success', 'error'] as const;

export type TokenLoading = (typeof TOKEN_LOADING)[number];
