import type { PlaygroundToastProps } from '$stylist/development/type/struct/playground-toast-props';
export function createPlaygroundToastState(props: PlaygroundToastProps) {
  const message = $derived(props.message);
  const duration = $derived(props.duration ?? 3000);
  const onClose = $derived(props.onClose);

  let isVisible = $state(true);

  function dismiss() {
    isVisible = false;
    onClose?.();
  }

  return {
    get message() { return message; },
    get duration() { return duration; },
    get isVisible() { return isVisible; },
    dismiss,
    onClose
  };
}

export default createPlaygroundToastState;
