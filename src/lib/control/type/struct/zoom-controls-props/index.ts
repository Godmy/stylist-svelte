import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ZoomControlsProps as ZoomControlsComponentProps } from '$stylist/control/interface/component/zoom-controls/other';

export type ZoomControlsProps = ZoomControlsComponentProps & InteractionHTMLAttributes<HTMLDivElement>;
