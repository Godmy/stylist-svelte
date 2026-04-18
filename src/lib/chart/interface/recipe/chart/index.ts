import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * Chart — график / диаграмма..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';
import type { ChartScale } from '$stylist/chart/type/struct/chart-scale';

export interface ChartRecipe extends StructIntersectAll<[ThemeAttributes<SVGSVGElement>]> {
	label?: string;
	caption?: string;
	badge?: string | number;
	series?: ChartSeries[];
	width?: number;
	height?: number;
	showLegend?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	xScale?: ChartScale;
	yScale?: ChartScale;
	zTickCount?: number;
	showAxisArrows?: boolean;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	title?: string;
}
