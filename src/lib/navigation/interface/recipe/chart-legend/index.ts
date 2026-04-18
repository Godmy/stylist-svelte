import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChartLegendItem } from '$stylist/navigation/type/struct/chart-legend-item';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartLegendProps extends StructIntersectAll<[ThemeAttributes<HTMLDivElement>]> {
	items?: ChartLegendItem[];
}
