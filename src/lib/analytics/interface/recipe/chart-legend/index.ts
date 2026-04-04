/**
 * ChartLegend — легенда графика..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { ChartLegendItem } from '$stylist/analytics/type/struct';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartLegendRecipe extends ThemeAttributes<HTMLDivElement> {
	items?: ChartLegendItem[];
}

export type ChartLegendProps = ChartLegendRecipe;
