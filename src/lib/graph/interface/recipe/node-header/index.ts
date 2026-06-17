import type { Snippet } from 'svelte';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipeNodeHeader
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	label?: string;
	icon?: string;
	size?: TokenSize;
	id?: string;
	title?: string;
	selected?: boolean;
	editable?: boolean;
	showClose?: boolean;
	showSettings?: boolean;
	showDuplicate?: boolean;
	showDelete?: boolean;
	color?: string;
	actions?: Snippet;
	onTitleChange?: (value: string) => void;
	onclose?: () => void;
	onsettings?: () => void;
	onduplicate?: () => void;
	ondelete?: () => void;
}
