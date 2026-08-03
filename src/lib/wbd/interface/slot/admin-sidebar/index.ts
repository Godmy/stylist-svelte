import type { Snippet } from 'svelte';
import type { StructWbdAdminNavItem } from '$stylist/wbd/type/struct/admin-nav-item';

export interface SlotWbdAdminSidebar {
	items: StructWbdAdminNavItem[];
	logo?: Snippet;
	footer?: Snippet;
	class?: string;
}
