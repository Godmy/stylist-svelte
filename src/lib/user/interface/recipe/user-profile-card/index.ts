import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeUserProfileCard
	extends ComputeIntersectAll<[((HTMLAttributes<HTMLDivElement> & {
/** User data */
	user?: ({
	id: string;
	name: string;
	email?: string;
	phone?: string;
	bio?: string;
	avatar?: string;
	role?: string;
	location?: string;
});
	/** Show avatar */
	showAvatar?: boolean;
	/** Show email */
	showEmail?: boolean;
	/** Show phone */
	showPhone?: boolean;
	/** Show bio */
	showBio?: boolean;
	/** Enable editing */
	editable?: boolean;
	/** Show edit button */
	showEditButton?: boolean;
	/** Custom class name */
	class?: string;
	/** Callback when edit is clicked */
	onEdit?: (user: ({
	id: string;
	name: string;
	email?: string;
	phone?: string;
	bio?: string;
	avatar?: string;
	role?: string;
	location?: string;
})) => void;
	/** Callback when save is clicked */
	onSave?: (user: ({
	id: string;
	name: string;
	email?: string;
	phone?: string;
	bio?: string;
	avatar?: string;
	role?: string;
	location?: string;
})) => void;
})), ((HTMLAttributes<HTMLDivElement> & {
name?: string;
	role?: string;
	email?: string;
	class?: string;
}))]> {}

