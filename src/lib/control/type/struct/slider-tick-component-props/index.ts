import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SliderTickProps } from '../slider-tick-props';

export type SliderTickComponentProps = SliderTickProps & InteractionHTMLAttributes<HTMLDivElement>;
