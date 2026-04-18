import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ColorPaletteProps as BaseColorPaletteProps } from '$stylist/input/type/struct/color-palette/color-palette-props';
import type { ThemeColorPaletteItem } from '$stylist/color/interface/slot/color-palette-item';

export interface ThemeColorPaletteRecipe extends StructIntersectAll<[BaseColorPaletteProps]> {}
