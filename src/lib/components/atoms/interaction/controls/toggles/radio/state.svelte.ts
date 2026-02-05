import type { RadioProps } from '$stylist/design-system/attributes';
import { getToggleContainerClasses, getToggleDisabledClass, getToggleSizeClasses, getToggleThumbClasses, getToggleTrackClasses } from '$stylist/design-system/presets';

export const createRadioState = (props: RadioProps) => {
  const size = props.size ?? 'md';
  const disabled = props.disabled ?? false;
  
  return {
    size,
    disabled,
    containerClasses: getToggleContainerClasses(props.class),
    trackClasses: getToggleTrackClasses(),
    thumbClasses: getToggleThumbClasses(),
    sizeClasses: getToggleSizeClasses(size),
    disabledClass: getToggleDisabledClass(disabled)
  };
};
