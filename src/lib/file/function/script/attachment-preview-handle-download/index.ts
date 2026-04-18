import { createAttachmentDispatch } from '$stylist/file/function/script/attachment-preview';
import type { SlotAttachment as Attachment } from '$stylist/file/interface/slot/attachment';

export function handleDownload(
  dispatch: ReturnType<typeof createAttachmentDispatch>,
  attachment: Attachment
): void {
  dispatch('download', { attachment });
}
