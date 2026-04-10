import type { ToggleWithDescriptionProps } from '$stylist/control/type/struct/toggle-with-description-props';

export function createToggleWithDescriptionState(props: ToggleWithDescriptionProps) {
  let isChecked = $state(props.checked ?? false);

  $effect(() => {
    if (isChecked !== (props.checked ?? false)) {
      isChecked = props.checked ?? false;
    }
  });

  const containerClass = $derived(
    `flex items-start p-4 border border-[var(--color-border-primary)] rounded-lg ${props.class ?? ''} ${
      props.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer'
    }`.trim()
  );
  const toggleClass = $derived(props.toggleClass ?? '');
  const labelClass = $derived(props.labelClass ?? '');
  const descriptionClass = $derived(props.descriptionClass ?? '');
  const trackClass = $derived(
    `absolute h-full w-full rounded-full transition-colors ${
      isChecked ? 'bg-[var(--color-primary-600)]' : 'bg-[var(--color-background-tertiary)]'
    }`
  );
  const thumbClass = $derived(
    `absolute left-0 inline-block h-4 w-4 transform rounded-full border-2 bg-[var(--color-background-primary)] transition-transform ${
      isChecked ? 'translate-x-6' : 'translate-x-1'
    } ${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`.trim()
  );

  function handleToggle() {
    if (props.disabled) return;

    isChecked = !isChecked;
    props.onValueInput?.(isChecked);
    props.onValueChange?.(isChecked);
    props.onInput?.(isChecked);
    props.onChange?.(isChecked);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  }

  return {
    get isChecked() {
      return isChecked;
    },
    get containerClass() {
      return containerClass;
    },
    get toggleClass() {
      return toggleClass;
    },
    get labelClass() {
      return labelClass;
    },
    get descriptionClass() {
      return descriptionClass;
    },
    get trackClass() {
      return trackClass;
    },
    get thumbClass() {
      return thumbClass;
    },
    handleToggle,
    handleKeyDown
  };
}

export default createToggleWithDescriptionState;
