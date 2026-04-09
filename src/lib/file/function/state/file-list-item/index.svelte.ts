export function createFileListItemState(
  props: {
    disabled?: boolean;
    class?: string;
  }
) {
  return {
    variant: 'default',
    size: 'md',
    disabled: props.disabled ?? false,
    classes: [props.class || ''].filter(Boolean).join(' '),
  };
}

export default createFileListItemState;
