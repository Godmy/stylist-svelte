import type { ContractAttachment } from '$stylist/file/interface/contract/attachment';

export interface SlotAttachmentPreview {
	attachment: ContractAttachment;
	showActions?: boolean;
	class?: string;
}
