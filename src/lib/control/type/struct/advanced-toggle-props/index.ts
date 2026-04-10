import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { AdvancedToggleProps as AdvancedToggleComponentProps } from '$stylist/control/interface/component/toggles';

export type AdvancedToggleProps = AdvancedToggleComponentProps &
	InteractionHTMLAttributes<HTMLDivElement>;
