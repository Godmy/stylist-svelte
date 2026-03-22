export const TOKEN_MESSAGE_STATE = ['draft', 'system', 'incoming', 'outgoing'] as const;

export type TokenMessageState = (typeof TOKEN_MESSAGE_STATE)[number];
