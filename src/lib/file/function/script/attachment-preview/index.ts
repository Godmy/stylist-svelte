import { createEventDispatcher } from 'svelte';
import type { SlotAttachment as Attachment } from '$stylist/file/interface/slot/attachment';

export function createAttachmentDispatch() {
  return createEventDispatcher<{
    remove: { attachment: Attachment };
    download: { attachment: Attachment };
  }>();
}
