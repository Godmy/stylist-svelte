export const TOKEN_AVAILABILITY = ['online', 'offline', 'away', 'busy', 'typing'] as const;

export type TokenAvailability = (typeof TOKEN_AVAILABILITY)[number];
