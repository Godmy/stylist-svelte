import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * ChartPolyline — полилиния графика..
 *
 * LEGO-состав:

 */
import type { ChartFunctionPoint } from '$stylist/chart/type/struct/chart-point';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartPolylineRecipe extends StructIntersectAll<[ThemeAttributes<SVGPolylineElement>]> {
	points?: ChartFunctionPoint[];
	width: number;
	height: number;
	xDomain?: [number, number];
	yDomain?: [number, number];
	color?: string;
	strokeWidth?: number;
}

