import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ActionSegmentedControlProps as ActionSegmentedControlComponentProps } from '$stylist/control/interface/component/toggles';

export type ActionSegmentedControlProps = ActionSegmentedControlComponentProps &
	InteractionHTMLAttributes<HTMLDivElement>;
