import type { SlotAttachment } from '$stylist/file/interface/slot/attachment';

export interface SlotAttachmentPreview {
	attachment: SlotAttachment;
	showActions?: boolean;
	class?: string;
}
