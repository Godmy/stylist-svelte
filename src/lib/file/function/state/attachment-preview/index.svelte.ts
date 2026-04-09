export function createAttachmentPreviewState(
  props: {
    showActions?: boolean;
    class?: string;
  }
) {
  return {
    variant: 'default',
    size: 'md',
    disabled: false,
    showActions: props.showActions ?? true,
    classes: [props.class || ''].filter(Boolean).join(' '),
  };
}

export default createAttachmentPreviewState;
