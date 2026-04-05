import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { StatusItem } from '$stylist/analytics/type/struct/status-item';

/** StatusDashboard = label + caption + size/layout + status items. */
export interface StatusDashboardRecipe
	extends RecordArchitectureMerge<[
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
