import { createEventDispatcher } from 'svelte';
import type { SlotAttachment as Attachment } from '$stylist/file/interface/slot/attachment';

export function createAttachmentDispatch() {
  return createEventDispatcher<{
    remove: { attachment: Attachment };
    download: { attachment: Attachment };
  }>();
}

export function formatFileSize(bytes?: number): string {
  if (!bytes) return '';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

export function getIconName(type: string): string {
  switch (type) {
    case 'image': return 'image';
    case 'video': return 'video';
    case 'audio': return 'audio';
    case 'file': return 'file';
    default: return 'file';
  }
}

export function handleDownload(
  dispatch: ReturnType<typeof createAttachmentDispatch>,
  attachment: Attachment
): void {
  dispatch('download', { attachment });
}

export function handleRemove(
  dispatch: ReturnType<typeof createAttachmentDispatch>,
  attachment: Attachment
): void {
  dispatch('remove', { attachment });
}
