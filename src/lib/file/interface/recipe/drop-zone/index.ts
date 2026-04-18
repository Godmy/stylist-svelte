import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { BehaviorDropZoneEvents } from '$stylist/file/interface/behavior/drop-zone-events';

export interface RecipeDropZone extends StructIntersectAll<[BehaviorDropZoneEvents]> {
	/** Children slot */
	children?: Snippet;
	/** Accepted file types */
	accept?: string;
	/** Multiple files allowed */
	multiple?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Maximum file size */
	maxSize?: number;
	/** Maximum items */
	maxItems?: number;
	/** Show preview */
	preview?: boolean;
	/** Label text */
	label?: string;
	/** Description text */
	description?: string;
	/** Additional CSS class */
	class?: string;
}
