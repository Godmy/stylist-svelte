/**
 * ChartPolyline — полилиния графика..
 *
 * LEGO-состав:

 */
import type { ChartFunctionPoint } from '$stylist/analytics/interface/recipe/chart';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartPolylineRecipe extends ThemeAttributes<SVGPolylineElement> {
	points?: ChartFunctionPoint[];
	width: number;
	height: number;
	xDomain?: [number, number];
	yDomain?: [number, number];
	color?: string;
	strokeWidth?: number;
}

export type ChartPolylineProps = ChartPolylineRecipe;
