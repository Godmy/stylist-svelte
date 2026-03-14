import { derived, writable } from 'svelte/store';
import type { ZoomControlsProps } from '../../contracts/interaction/zoom-controls';
import { mergeClasses } from '$stylist/utils/classes';

export function createZoomControlsState(props: ZoomControlsProps) {
  // Initialize props with defaults
  const initialValue = props.initialValue ?? 100;
  const minZoom = props.minZoom ?? 50;
  const maxZoom = props.maxZoom ?? 200;
  const step = props.step ?? 10;
  const showPercentage = props.showPercentage ?? true;

  const styles = {
    container: 'inline-flex flex-col gap-3 rounded-lg border border-[--color-border-secondary] bg-[--color-background-primary] p-3 shadow-sm',
    indicatorContainer: 'flex justify-center',
    indicator: 'inline-flex min-w-16 items-center justify-center rounded-md bg-[--color-background-secondary] px-3 py-2',
    controlsContainer: 'inline-flex items-stretch',
    controlButton: 'inline-flex h-10 w-10 items-center justify-center border border-[--color-border-secondary] bg-[--color-background-primary] text-[--color-text-primary] transition-colors hover:bg-[--color-background-secondary]',
    controlButtonDisabled: 'cursor-not-allowed opacity-[var(--opacity-50)] hover:bg-[--color-background-primary]',
    controlButtonFirst: 'rounded-l-md',
    controlButtonMiddle: 'border-l-0 border-r-0',
    controlButtonLast: 'rounded-r-md',
    hint: 'flex items-center justify-between gap-3 text-xs text-[--color-text-secondary]',
    kbd: 'rounded border border-[--color-border-secondary] bg-[--color-background-secondary] px-1.5 py-0.5 font-mono text-[10px]'
  };

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => mergeClasses($container, $class)
  );

  const controlsContainerClasses = derived(
    [writable(props.controlsClass), writable(styles.controlsContainer)],
    ([$class, $container]) => mergeClasses($container, $class)
  );

  const indicatorClasses = derived(
    [writable(props.indicatorClass), writable(styles.indicator)],
    ([$class, $indicator]) => mergeClasses($indicator, $class)
  );

  return {
    initialValue,
    minZoom,
    maxZoom,
    step,
    showPercentage,
    containerClasses,
    indicatorContainerClasses: styles.indicatorContainer,
    indicatorClasses,
    controlsContainerClasses,
    controlButtonClasses: styles.controlButton,
    controlButtonDisabledClasses: styles.controlButtonDisabled,
    controlButtonFirstClasses: styles.controlButtonFirst,
    controlButtonMiddleClasses: styles.controlButtonMiddle,
    controlButtonLastClasses: styles.controlButtonLast,
    hintClasses: styles.hint,
    kbdClasses: styles.kbd
  };
}

export default createZoomControlsState;




