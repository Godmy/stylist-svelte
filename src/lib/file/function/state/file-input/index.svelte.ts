import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export function createFileInputState(
  props: {
    variant?: TokenAppearance;
    size?: string;
    disabled?: boolean;
    class?: string;
  } & Record<string, unknown>
) {
  return {
    variant: props.variant ?? 'default',
    size: props.size ?? 'md',
    disabled: props.disabled ?? false,
    classes: [props.class || ''].filter(Boolean).join(' '),
  };
}

export default createFileInputState;
