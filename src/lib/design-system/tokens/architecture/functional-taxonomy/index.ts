export const TOKEN_FUNCTIONAL_TAXONOMY = ['architecture', 'information', 'interaction'] as const;

export type TokenFunctionalTaxonomy = (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
