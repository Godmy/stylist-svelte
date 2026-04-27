import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InterfaceControllerSettings } from '$stylist/playground';

export interface AlertCardStoryProps extends StructIntersectAll<[]> {
	id?: string;
	title?: string;
	description?: string;
	controls?: InterfaceControllerSettings[];
	component?: unknown;
}
