export const TOKEN_TRANSLATION = ['translated', 'needs-review', 'untranslated'] as const;

export type TokenTranslation = (typeof TOKEN_TRANSLATION)[number];
