/** Code variants */
export const CODE = ['default', 'terminal', 'diff'] as const;
export type Code = (typeof CODE)[number];
