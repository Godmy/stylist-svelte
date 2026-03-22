export const TOKEN_DIFF_TYPE = ['added', 'removed', 'unchanged'] as const;

export type TokenDiffType = (typeof TOKEN_DIFF_TYPE)[number];
