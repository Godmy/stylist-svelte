/**
 * Tag — метка с возможностью закрытия.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label
 *   IIconSlot         (information) — icon
 *   IClickable        (interaction) — onClose
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ChildrenProp } from '$stylist/information/type/struct/common';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TagRecipe extends ChildrenProp, ThemeAttributes<HTMLSpanElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
	closable?: boolean;
	onClose?: () => void;
}
