export const LINE_STYLES = ['solid', 'dashed', 'dotted', 'bold', 'tapered', 'invisible'] as const;
export type LineStyle = (typeof LINE_STYLES)[number];
