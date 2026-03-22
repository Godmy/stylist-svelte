export const TOKEN_MESSAGE_STATUS = ['sent', 'delivered', 'read', 'error'] as const;

export type TokenMessageStatus = (typeof TOKEN_MESSAGE_STATUS)[number];
