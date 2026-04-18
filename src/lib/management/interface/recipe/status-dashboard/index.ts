import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { StatusItem } from '$stylist/management/type/struct/status-item';

/** StatusDashboard = label + caption + size/layout + status items. */
export interface StatusDashboardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]> {
	items: StatusItem[];
	layout?: TokenOrientation;
	itemClass?: string;
	headerClass?: string;
	variant?: 'default' | 'compact' | 'minimal';
}

