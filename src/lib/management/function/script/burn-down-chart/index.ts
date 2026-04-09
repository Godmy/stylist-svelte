import type { BurnDownPoint } from '$stylist/management/interface/struct/burn-down-point';
import type { BurnDownChartMargins } from '$stylist/management/const/struct/burn-down-chart-margins';

export interface BurnDownTimestamps {
  start: number;
  end: number;
}

export interface BurnDownMinMaxResult {
  minActual: number;
  maxActual: number;
  minIdeal: number;
  maxIdeal: number;
}

export interface BurnDownLabel {
  x: number;
  y: number;
  text: string;
}

export function getBurnDownTimestamps(points: BurnDownPoint[]): BurnDownTimestamps {
  const start = new Date(points[0]?.date ?? Date.now()).getTime();
  const end = new Date(points[points.length - 1]?.date ?? Date.now()).getTime();
  return { start, end };
}

export function getBurnDownMinMaxValues(points: BurnDownPoint[]): BurnDownMinMaxResult {
  if (!points.length) return { minActual: 0, maxActual: 0, minIdeal: 0, maxIdeal: 0 };

  const actualValues = points.map((p: BurnDownPoint) => p.actual);
  const idealValues = points.map((p: BurnDownPoint) => p.ideal);

  return {
    minActual: Math.min(...actualValues),
    maxActual: Math.max(...actualValues),
    minIdeal: Math.min(...idealValues),
    maxIdeal: Math.max(...idealValues)
  };
}

export function generateBurnDownIdealPath(
  points: BurnDownPoint[],
  margins: BurnDownChartMargins,
  innerWidth: number,
  innerHeight: number
): string {
  if (!points.length) return '';

  const { maxIdeal } = getBurnDownMinMaxValues(points);

  const pathPoints = points.map((point: BurnDownPoint, i: number) => {
    const x = margins.left + (i * innerWidth / (points.length - 1));
    const y = margins.top + innerHeight - (point.ideal / maxIdeal) * innerHeight;
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  });

  return pathPoints.join(' ');
}

export function generateBurnDownActualPath(
  points: BurnDownPoint[],
  margins: BurnDownChartMargins,
  innerWidth: number,
  innerHeight: number
): string {
  if (!points.length) return '';

  const { maxActual } = getBurnDownMinMaxValues(points);

  const pathPoints = points.map((point: BurnDownPoint, i: number) => {
    const x = margins.left + (i * innerWidth / (points.length - 1));
    const y = margins.top + innerHeight - (point.actual / maxActual) * innerHeight;
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  });

  return pathPoints.join(' ');
}

export function generateBurnDownXLabels(
  points: BurnDownPoint[],
  margins: BurnDownChartMargins,
  innerWidth: number,
  height: number
): BurnDownLabel[] {
  if (!points.length) return [];

  const labels: BurnDownLabel[] = [];
  const interval = Math.ceil(points.length / 5);

  for (let i = 0; i < points.length; i += interval) {
    const point = points[i];
    const x = margins.left + (i * innerWidth / (points.length - 1));
    const dateStr = new Date(point.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });

    labels.push({ x, y: height - 10, text: dateStr });
  }

  return labels;
}

export function generateBurnDownYLabels(
  points: BurnDownPoint[],
  margins: BurnDownChartMargins,
  innerHeight: number,
  marginTop: number
): BurnDownLabel[] {
  const { maxActual, maxIdeal } = getBurnDownMinMaxValues(points);
  const maxVal = Math.max(maxActual, maxIdeal);
  const step = Math.ceil(maxVal / 5);
  const labels: BurnDownLabel[] = [];

  for (let i = 0; i <= 5; i++) {
    const value = i * step;
    const y = marginTop + innerHeight - (value / maxVal) * innerHeight;

    labels.push({ x: 10, y, text: value.toString() });
  }

  return labels;
}
