import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/** Props для chart компонента */
import type { ChartRecipe } from '$stylist/chart/interface/recipe/chart';

export interface ChartProps extends StructIntersectAll<[ChartRecipe]> {}
