import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotZoomControls as ZoomControlsComponentProps } from '$stylist/control/interface/slot/zoom-controls';

export type ZoomControlsProps = ZoomControlsComponentProps & InteractionHTMLAttributes<HTMLDivElement>;
