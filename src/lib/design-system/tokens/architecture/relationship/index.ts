export const TOKEN_RELATIONSHIP = ['owner', 'input', 'output', 'one-to-one', 'one-to-many', 'many-to-many'] as const;

export type TokenRelationship = (typeof TOKEN_RELATIONSHIP)[number];
