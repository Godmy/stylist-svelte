export const TOKEN_TRIGGER = ['hover', 'click', 'focus'] as const;

export type TokenTrigger = (typeof TOKEN_TRIGGER)[number];
