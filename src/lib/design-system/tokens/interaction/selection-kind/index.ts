export const TOKEN_SELECTOR_KIND = ['default', 'minimal', 'filled'] as const;

export type TokenSelectorKind = (typeof TOKEN_SELECTOR_KIND)[number];
