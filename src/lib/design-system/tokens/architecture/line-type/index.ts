export const TOKEN_LINE_TYPE = ['default', 'minimal', 'elegant', 'bold'] as const;

export type TokenLineType = (typeof TOKEN_LINE_TYPE)[number];
