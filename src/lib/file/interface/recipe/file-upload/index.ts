import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorFileUploadEvents } from '$stylist/file/interface/behavior/file-upload-events';
import type { SlotFileUpload } from '$stylist/file/interface/slot/file-upload';
import type { UploadStatus } from '$stylist/file/type/struct/upload-status';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeFileUpload
	extends ComputeIntersectAll<
		[SlotFileUpload, BehaviorFileUploadEvents, SlotChildren, InteractionHTMLAttributes<HTMLDivElement>]
	> {
	accept?: string;
	maxSize?: number;
	multiple?: boolean;
	status?: UploadStatus;
	file?: File | null;
	disabled?: boolean;
	uploadText?: string;
	class?: string;
}