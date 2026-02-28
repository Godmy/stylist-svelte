export interface ZoomControlsStyles {
  container: string;
  indicatorContainer: string;
  indicator: string;
  controlsContainer: string;
  controlButton: string;
  controlButtonDisabled: string;
  controlButtonFirst: string;
  controlButtonMiddle: string;
  controlButtonLast: string;
  hint: string;
  kbd: string;
  [key: string]: string;
}

export interface ZoomControlsStyleManagerInterface {
  getContainerClass: () => string;
  getIndicatorContainerClass: () => string;
  getIndicatorClass: () => string;
  getControlsContainerClass: () => string;
  getControlButtonClass: () => string;
  getControlButtonDisabledClass: () => string;
  getControlButtonFirstClass: () => string;
  getControlButtonMiddleClass: () => string;
  getControlButtonLastClass: () => string;
  getHintClass: () => string;
  getKbdClass: () => string;
}

export const createZoomControlsStyles = <TOptions extends Record<string, unknown>>(
  _: TOptions,
  baseClasses?: Partial<ZoomControlsStyles>
): ZoomControlsStyles => {
  return {
    container: [
      'fixed bottom-4 right-4 flex flex-col items-end',
      baseClasses?.container || ''
    ].join(' '),

    indicatorContainer: [
      'mb-2',
      baseClasses?.indicatorContainer || ''
    ].join(' '),
    
    indicator: [
      'flex items-center px-3 py-2 bg-[--color-background-primary] rounded-full shadow-lg border',
      baseClasses?.indicator || ''
    ].join(' '),

    controlsContainer: [
      'flex flex-col rounded-full bg-[--color-background-primary] shadow-lg border',
      baseClasses?.controlsContainer || ''
    ].join(' '),

    controlButton: [
      'p-3 text-[--color-text-primary] hover:text-[--color-text-emphasis] hover:bg-[--color-background-hover]',
      baseClasses?.controlButton || ''
    ].join(' '),

    controlButtonDisabled: [
      'text-[--color-text-tertiary] cursor-not-allowed',
      baseClasses?.controlButtonDisabled || ''
    ].join(' '),
    
    controlButtonFirst: [
      'rounded-t-full',
      baseClasses?.controlButtonFirst || ''
    ].join(' '),
    
    controlButtonMiddle: [
      baseClasses?.controlButtonMiddle || ''
    ].join(' '),
    
    controlButtonLast: [
      'rounded-b-full',
      baseClasses?.controlButtonLast || ''
    ].join(' '),

    hint: [
      'mt-2 text-xs text-[--color-text-secondary] text-right',
      baseClasses?.hint || ''
    ].join(' '),

    kbd: [
      'px-2 py-1 text-xs rounded border bg-[--color-background-secondary]',
      baseClasses?.kbd || ''
    ].join(' ')
  };
};