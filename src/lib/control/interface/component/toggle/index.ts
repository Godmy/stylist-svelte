import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ToggleProps as BaseToggleProps } from '$stylist/control/interface/component/toggles';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface ToggleProps
	extends RecordArchitectureMerge<[BaseToggleProps, InteractionHTMLAttributes<HTMLInputElement>]>
{}
