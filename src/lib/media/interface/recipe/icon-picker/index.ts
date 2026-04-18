import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ThemeIconItem } from '$stylist/media/interface/slot/icon-picker';

export interface ThemeIconPickerRecipe
	extends StructIntersectAll<[Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>]>
{
	icons: ThemeIconItem[];
	title?: string;
	searchPlaceholder?: string;
	selectedIcon?: string;
	columns?: number;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	onIconSelect?: (icon: ThemeIconItem) => void;
	showSearch?: boolean;
	showCategories?: boolean;
}
