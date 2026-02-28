/** Semantic intent variants. */
export const SEMANTIC_VARIANTS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info'
] as const;
export type SemanticVariant = (typeof SEMANTIC_VARIANTS)[number];
