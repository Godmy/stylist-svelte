export const TOKEN_DOCUMENT_FORMAT = ['json', 'xml', 'text', 'html'] as const;

export type TokenDocumentFormat = (typeof TOKEN_DOCUMENT_FORMAT)[number];
