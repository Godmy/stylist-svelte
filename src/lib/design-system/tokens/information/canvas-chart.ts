export const CHART_TYPES = ['line', 'bar', 'pie'] as const;
export type ChartType = (typeof CHART_TYPES)[number];

export const CANVAS_CHART_VARIANTS = ['default', 'minimal', 'elegant', 'bold'] as const;
export type CanvasChartVariant = (typeof CANVAS_CHART_VARIANTS)[number];
