import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/** Props для pie-chart компонента */
import type { PieChartRecipe } from '$stylist/chart/interface/recipe/pie-chart';

export interface PieChartProps extends StructIntersectAll<[PieChartRecipe]> {}
