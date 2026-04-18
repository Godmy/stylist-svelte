import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ContractAttachment } from '$stylist/file/interface/contract/attachment';
import type { BehaviorAttachmentPreviewEvents } from '$stylist/file/interface/behavior/attachment-preview-events';
import type { SlotAttachment } from '$stylist/file/interface/slot/attachment';

export interface RecipeAttachmentPreview extends StructIntersectAll<[BehaviorAttachmentPreviewEvents]> {
	/** SlotAttachment data */
	attachment: ContractAttachment;
	/** Show actions */
	showActions?: boolean;
}
