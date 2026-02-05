import type { SliderTickProps } from '$stylist/design-system/attributes';
import { getSliderTickBaseClasses, getSliderTickLabelContainerClasses, getSliderTickStyle } from './helpers';

export const createSliderTickState = (props: SliderTickProps) => {
  return {
    baseClasses: getSliderTickBaseClasses(props.class),
    style: getSliderTickStyle(props.position, props.value, props.active),
    labelContainerClasses: getSliderTickLabelContainerClasses()
  };
};
