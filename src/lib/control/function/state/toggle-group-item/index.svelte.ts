import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { ToggleGroupItemProps } from '$stylist/control/interface/component/toggles';

export type ToggleGroupItemStateProps = ToggleGroupItemProps & {
  groupValue?: string | string[] | null;
  groupDisabled?: boolean;
  updateValue?: (value: string) => void;
};

export function createToggleGroupItemState(props: ToggleGroupItemStateProps) {
  const disabled = props.disabled ?? props.groupDisabled ?? false;
  const groupValue = props.groupValue ?? null;

  const isActive = Array.isArray(groupValue)
    ? groupValue.includes(props.value)
    : groupValue === props.value;

  const classes = joinClassNames(
    'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-[var(--opacity-50)]',
    isActive ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
    disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
  );

  return {
    get disabled() {
      return disabled;
    },
    get isActive() {
      return isActive;
    },
    get classes() {
      return classes;
    },
    handleClick() {
      if (!disabled) {
        props.updateValue?.(props.value);
      }
    }
  };
}

export default createToggleGroupItemState;
