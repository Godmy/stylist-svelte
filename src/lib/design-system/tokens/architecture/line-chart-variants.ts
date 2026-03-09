/** Line chart variant tokens */
export const LINE_CHART_VARIANTS = ['default', 'minimal', 'elegant', 'bold'] as const;
export type LineChartVariant = (typeof LINE_CHART_VARIANTS)[number];
