export const TOKEN_PROGRESS_TYPE = ['determinate', 'indeterminate'] as const;

export type TokenProgressType = (typeof TOKEN_PROGRESS_TYPE)[number];
