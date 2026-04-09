/**
 * Chip — интерактивная метка.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label
 *   IIconSlot         (information) — icon
 *   IClickable        (interaction) — onClick, onClose
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChipRecipe extends ChildrenProp, ThemeAttributes<HTMLDivElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
	closable?: boolean;
	onClick?: () => void;
	onClose?: () => void;
}
