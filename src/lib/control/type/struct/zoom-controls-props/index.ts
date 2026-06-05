import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotZoomControls as ZoomControlsComponentProps } from '$stylist/control/interface/slot/zoom-controls';

export type ZoomControlsProps = ZoomControlsComponentProps &
	InteractionHTMLAttributes<HTMLDivElement>;
