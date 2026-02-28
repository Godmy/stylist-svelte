export const CONNECTION_LINE_TYPES = ['bezier', 'straight', 'step', 'arc'] as const;
export type ConnectionLineType = (typeof CONNECTION_LINE_TYPES)[number];

export const CONNECTION_LINE_STYLES = ['solid', 'dashed', 'dotted'] as const;
export type ConnectionLineStyle = (typeof CONNECTION_LINE_STYLES)[number];
