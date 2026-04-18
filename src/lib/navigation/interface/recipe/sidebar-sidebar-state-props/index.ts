import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSidebar as SidebarProps } from '$stylist/navigation/interface/slot/sidebar';

export interface SidebarStateProps extends StructIntersectAll<[SidebarProps]> {
	class?: string;
}
