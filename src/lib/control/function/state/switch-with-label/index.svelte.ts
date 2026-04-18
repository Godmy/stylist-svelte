import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { SwitchWithLabelStateProps } from '$stylist/control/type/alias/switch-with-label-state-props';

export function createSwitchWithLabelState(props: SwitchWithLabelStateProps) {
  const className = props.class ?? '';
  const switchClassName = props.switchClass ?? '';
  const labelClassName = props.labelClass ?? '';
  const disabled = props.disabled ?? false;
  let checked = $state(props.checked ?? false);
  const label = props.label ?? '';
  const labelPosition = props.labelPosition ?? 'right';

  $effect(() => {
    checked = props.checked ?? false;
  });

  const containerClasses = joinClassNames(
    'flex items-center gap-2',
    labelPosition === 'left' ? 'flex-row-reverse' : 'flex-row',
    className
  );

  const switchClasses = joinClassNames(
    'relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2',
    checked ? 'bg-[var(--color-primary-500)]' : 'bg-[var(--color-border-primary)]',
    disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer',
    switchClassName
  );

  const handleClasses = joinClassNames(
    'inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-200',
    checked ? 'translate-x-5' : 'translate-x-0.5'
  );

  const labelClasses = joinClassNames(
    'text-sm font-medium text-[var(--color-text-primary)]',
    disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer',
    labelClassName
  );

  const labelPositionClass = labelPosition === 'left' ? 'order-first' : 'order-last';

  function handleToggle() {
    if (disabled) return;

    checked = !checked;
    props.onValueInput?.(checked);
    props.onValueChange?.(checked);
    props.onInput?.(checked);
    props.onChange?.(checked);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  }

  return {
    get disabled() {
      return disabled;
    },
    get checked() {
      return checked;
    },
    get label() {
      return label;
    },
    get labelPosition() {
      return labelPosition;
    },
    get containerClasses() {
      return containerClasses;
    },
    get switchClasses() {
      return switchClasses;
    },
    get handleClasses() {
      return handleClasses;
    },
    get labelClasses() {
      return labelClasses;
    },
    get labelPositionClass() {
      return labelPositionClass;
    },
    handleToggle,
    handleKeyDown
  };
}

export default createSwitchWithLabelState;
