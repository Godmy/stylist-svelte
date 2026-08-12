import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChartLegendItem } from '$stylist/chart/type/object/chart-legend-item';
export interface ChartLegendProps
	extends ComputeIntersectAll<[SlotTheme]> {
	items?: ChartLegendItem[];
}
