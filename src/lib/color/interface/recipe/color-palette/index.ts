import type {
	ColorItem as BaseColorItem,
	ColorPaletteProps as BaseColorPaletteProps
} from '$stylist/input/type/struct/color-palette';

export type ThemeColorPaletteItem = BaseColorItem;

export interface ThemeColorPaletteRecipe extends BaseColorPaletteProps {}
