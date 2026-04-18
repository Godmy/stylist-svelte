import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ContractAttachment } from '$stylist/file/interface/contract/attachment';

export interface BehaviorAttachmentPreviewEvents {
	onDownload?: (attachment: ContractAttachment) => void;
	onRemove?: (attachment: ContractAttachment) => void;
}
