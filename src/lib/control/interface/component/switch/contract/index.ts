import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SwitchProps as BaseSwitchProps } from '$stylist/control/interface/component/switch/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface SwitchProps
	extends RecordArchitectureMerge<[BaseSwitchProps, InteractionHTMLAttributes<HTMLInputElement>]>
{}
