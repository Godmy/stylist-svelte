export const TOKEN_NODE_TYPE = ['default', 'source', 'processor', 'output', 'gateway', 'custom'] as const;

export type TokenNodeType = (typeof TOKEN_NODE_TYPE)[number];
