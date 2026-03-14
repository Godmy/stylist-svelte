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
