import type { StatusIndicatorWithLabelProps } from '$stylist/design-system/props/information/indicators';
import { cn } from '$stylist/utils/classes';
import { mergeClasses } from '$stylist/utils/classes';

export function createStatusIndicatorWithLabelState(props: StatusIndicatorWithLabelProps) {
  const status = $derived(props.status ?? 'default');
  const label = $derived(props.label);
  const classes = $derived(mergeClasses('status-indicator-with-label', props.class));

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
