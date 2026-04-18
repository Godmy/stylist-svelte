import type { SlotZoomControls as ZoomControlsProps } from '$stylist/control/interface/slot/zoom-controls';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createZoomControlsState(props: ZoomControlsProps) {
  const initialValue = $derived(props.initialValue ?? 100);
  const minZoom = $derived(props.minZoom ?? 50);
  const maxZoom = $derived(props.maxZoom ?? 200);
  const step = $derived(props.step ?? 10);
  const showPercentage = $derived(props.showPercentage ?? true);
  let currentZoom = $state(props.initialValue ?? 100);

  $effect(() => {
    currentZoom = props.initialValue ?? 100;
  });

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
  const containerClasses = $derived(
    joinClassNames(styles.container, props.class)
  );

  const controlsContainerClasses = $derived(
    joinClassNames(styles.controlsContainer, props.controlsClass)
  );

  const indicatorClasses = $derived(
    joinClassNames(styles.indicator, props.indicatorClass)
  );

  return {
    get initialValue() {
      return initialValue;
    },
    get minZoom() {
      return minZoom;
    },
    get maxZoom() {
      return maxZoom;
    },
    get step() {
      return step;
    },
    get showPercentage() {
      return showPercentage;
    },
    get currentZoom() {
      return currentZoom;
    },
    get containerClasses() {
      return containerClasses;
    },
    indicatorContainerClasses: styles.indicatorContainer,
    get indicatorClasses() {
      return indicatorClasses;
    },
    get controlsContainerClasses() {
      return controlsContainerClasses;
    },
    controlButtonClasses: styles.controlButton,
    controlButtonDisabledClasses: styles.controlButtonDisabled,
    controlButtonFirstClasses: styles.controlButtonFirst,
    controlButtonMiddleClasses: styles.controlButtonMiddle,
    controlButtonLastClasses: styles.controlButtonLast,
    hintClasses: styles.hint,
    kbdClasses: styles.kbd,
    handleZoomIn() {
      currentZoom = Math.min(currentZoom + step, maxZoom);
      this.applyZoom();
    },
    handleZoomOut() {
      currentZoom = Math.max(currentZoom - step, minZoom);
      this.applyZoom();
    },
    handleReset() {
      currentZoom = initialValue;
      this.applyZoom();
    },
    applyZoom() {
      const contentContainer =
        (document.querySelector('.content-container') as HTMLElement | null) ?? document.body;
      contentContainer.style.transform = `scale(${currentZoom / 100})`;
      contentContainer.style.transformOrigin = 'top left';
      contentContainer.style.width = `${100 * (100 / currentZoom)}%`;
      contentContainer.style.height = `${100 * (100 / currentZoom)}%`;

      props.onValueInput?.(currentZoom);
      props.onValueChange?.(currentZoom);
      props.onChange?.(currentZoom);
    }
  };
}

export default createZoomControlsState;





