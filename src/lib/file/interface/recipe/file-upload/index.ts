import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { BehaviorFileUploadEvents } from '$stylist/file/interface/behavior/file-upload-events';
import type { UploadStatus } from '$stylist/file/type/struct/upload-status';

export interface RecipeFileUpload extends StructIntersectAll<[BehaviorFileUploadEvents]> {
	/** Accepted file types */
	accept?: string;
	/** Maximum file size */
	maxSize?: number;
	/** Multiple files allowed */
	multiple?: boolean;
	/** Upload status */
	status?: UploadStatus;
	/** Selected file */
	file?: File | null;
	/** Children slot */
	children?: Snippet;
	/** Disabled state */
	disabled?: boolean;
	/** Upload text */
	uploadText?: string;
	/** Additional CSS class */
	class?: string;
}
