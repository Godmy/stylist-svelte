/**
 * NodeHeader — заголовок узла..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IIconSlot        (information) — icon (Icon)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface NodeHeaderRecipe extends ThemeAttributes<HTMLDivElement> {
	label?: string;
	icon?: string;
	size?: TokenSize;
	selected?: boolean;
	editable?: boolean;
	showClose?: boolean;
	showSettings?: boolean;
	showDuplicate?: boolean;
	showDelete?: boolean;
	color?: string;
}
