import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorAttachmentPreviewEvents } from '$stylist/file/interface/behavior/attachment-preview-events';
import type { SlotAttachmentPreview } from '$stylist/file/interface/slot/attachment-preview';

export interface RecipeAttachmentPreview
	extends StructIntersectAll<[SlotAttachmentPreview, BehaviorAttachmentPreviewEvents]> {}
