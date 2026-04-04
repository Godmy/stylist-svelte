import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface ThemeAdvancedColorPickerRecipe extends InteractionHTMLAttributes<HTMLDivElement> {
	value?: string;
	disabled?: boolean;
	showInput?: boolean;
	showPalette?: boolean;
	onInput?: (value: string) => void;
	onChange?: (value: string) => void;
	class?: string;
}
