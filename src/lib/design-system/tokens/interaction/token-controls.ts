export const TOKEN_DOMAINS = ['architecture', 'information', 'interaction'] as const;
export type TokenDomain = (typeof TOKEN_DOMAINS)[number];

export const TOKEN_CONTROL_KINDS = ['radio', 'select', 'range', 'text'] as const;
export type TokenControlKind = (typeof TOKEN_CONTROL_KINDS)[number];

export type TokenValue = string | number | boolean;
