import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractFileItem } from '$stylist/file/interface/contract/file-item';
import type { BehaviorFileListItemEvents } from '$stylist/file/interface/behavior/file-list-item-events';

export interface RecipeFileListItem extends StructIntersectAll<[BehaviorFileListItemEvents]> {
	/** File item data */
	item: ContractFileItem;
	/** Show thumbnail */
	showThumbnail?: boolean;
	/** Show size */
	showSize?: boolean;
	/** Show modified date */
	showModified?: boolean;
	/** Show owner */
	showOwner?: boolean;
	/** Enable selection */
	enableSelection?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Variant */
	variant?: 'default' | 'compact';
	/** Additional CSS class */
	class?: string;
	/** Cell CSS class */
	cellClass?: string;
}
