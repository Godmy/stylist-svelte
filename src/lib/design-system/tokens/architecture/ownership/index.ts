export const TOKEN_OWNERSHIP = ['government', 'private', 'brand'] as const;

export type TokenOwnership = (typeof TOKEN_OWNERSHIP)[number];
