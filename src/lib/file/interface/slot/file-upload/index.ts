import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { UploadStatus } from '$stylist/file/type/struct/upload-status';

export interface SlotFileUpload
	extends StructIntersectAll<[SlotChildren, InteractionHTMLAttributes<HTMLDivElement>]> {
	accept?: string;
	maxSize?: number;
	multiple?: boolean;
	status?: UploadStatus;
	file?: File | null;
	onFileSelect?: (file: File | FileList | null) => void;
	onUpload?: (file: File) => Promise<void>;
	disabled?: boolean;
	uploadText?: string;
	class?: string;
	[key: string]: unknown;
}
