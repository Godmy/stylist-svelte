export const LINE_TYPES = ['bezier', 'straight', 'step', 'arc'] as const;
export type LineType = (typeof LINE_TYPES)[number];
