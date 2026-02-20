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
      'flex items-center px-3 py-2 bg-white rounded-full shadow-lg border',
      baseClasses?.indicator || ''
    ].join(' '),
    
    controlsContainer: [
      'flex flex-col rounded-full bg-white shadow-lg border',
      baseClasses?.controlsContainer || ''
    ].join(' '),
    
    controlButton: [
      'p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100',
      baseClasses?.controlButton || ''
    ].join(' '),
    
    controlButtonDisabled: [
      'text-gray-400 cursor-not-allowed',
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
      'mt-2 text-xs text-gray-500 text-right',
      baseClasses?.hint || ''
    ].join(' '),
    
    kbd: [
      'px-2 py-1 text-xs rounded border bg-gray-100',
      baseClasses?.kbd || ''
    ].join(' ')
  };
};