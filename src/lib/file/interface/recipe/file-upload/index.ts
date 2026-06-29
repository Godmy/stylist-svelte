import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { BehaviorFileUploadEvents } from '$stylist/file/interface/behavior/file-upload-events';
import type { SlotFileUpload } from '$stylist/file/interface/slot/file-upload';
import type { UploadStatus } from '$stylist/file/type/alias/upload-status';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeFileUpload
	extends ComputeIntersectAll<
		[SlotFileUpload, BehaviorFileUploadEvents, SlotChildren, HTMLAttributes<HTMLDivElement>, SlotInteraction]
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
