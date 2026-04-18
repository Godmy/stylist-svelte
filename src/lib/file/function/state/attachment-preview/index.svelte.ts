import { createAttachmentDispatch } from '$stylist/file/function/script/attachment-preview';
import { handleDownload } from '$stylist/file/function/script/attachment-preview-handle-download';
import { handleRemove } from '$stylist/file/function/script/attachment-preview-handle-remove';
import type { Attachment } from '$stylist/file/type/struct/attachment-preview/attachment';

export function createAttachmentPreviewState(
  props: {
    attachment: Attachment;
    showActions?: boolean;
    class?: string;
  }
) {
  const dispatch = createAttachmentDispatch();

  function download(): void {
    handleDownload(dispatch, props.attachment);
  }

  function remove(): void {
    handleRemove(dispatch, props.attachment);
  }

  return {
    variant: 'default',
    size: 'md',
    disabled: false,
    showActions: props.showActions ?? true,
    classes: [props.class || ''].filter(Boolean).join(' '),
    download,
    remove,
  };
}

export default createAttachmentPreviewState;
