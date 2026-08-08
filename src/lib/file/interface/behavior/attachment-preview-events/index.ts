import type { SlotAttachment } from '$stylist/file/interface/slot/attachment';

export interface BehaviorAttachmentPreviewEvents {
	onDownload?: (attachment: SlotAttachment) => void;
	onRemove?: (attachment: SlotAttachment) => void;
}
