import type { LineChartData, LineChartPoint } from '$stylist/analytics/type/struct/line-chart';

/** Legacy chart/ aliases normalized to the canonical line-chart data model. */
export type LineChartDataPoint = LineChartPoint;
export type LineChartSeries = LineChartData;
export type { LineChartData, LineChartPoint };
