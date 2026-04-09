export function createFileBrowserState(
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

export default createFileBrowserState;
