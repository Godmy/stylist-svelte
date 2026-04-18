import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/** Props для chart-background компонента */
import type { ChartBackgroundRecipe } from '$stylist/chart/interface/recipe/chart-background';

export interface ChartBackgroundProps extends StructIntersectAll<[ChartBackgroundRecipe]> {}
