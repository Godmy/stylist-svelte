import type { StatusIndicatorWithLabelProps } from '$stylist/design-system/props/indicators';
import { cn } from '$stylist/utils/classes';

export function createStatusIndicatorWithLabelState(props: StatusIndicatorWithLabelProps) {
  const status = $derived(props.status ?? 'default');
  const label = $derived(props.label);
  const classes = $derived(cn('status-indicator-with-label', props.class));

  return {
    get status() {
      return status;
    },
    get label() {
      return label;
    },
    get classes() {
      return classes;
    }
  };
}

export default createStatusIndicatorWithLabelState;
