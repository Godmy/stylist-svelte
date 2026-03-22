export const TOKEN_CONNECTOR = ['invisible', 'line', 'arrow', 'ring', 'anchor'] as const;

export type TokenConnector = (typeof TOKEN_CONNECTOR)[number];
