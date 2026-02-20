import { derived, writable } from 'svelte/store';
import { createZoomControlsStyles } from '../styles/zoom-controls';
import type { ZoomControlsProps } from '../props/zoom-controls';
import { mergeClasses } from '../../utils/classes';

export function createZoomControlsState(props: ZoomControlsProps) {
  // Initialize props with defaults
  const initialValue = props.initialValue ?? 100;
  const minZoom = props.minZoom ?? 50;
  const maxZoom = props.maxZoom ?? 200;
  const step = props.step ?? 10;
  const showPercentage = props.showPercentage ?? true;

  // Generate styles
  const styles = createZoomControlsStyles({});

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