import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ToggleGroupRootProps as BaseToggleGroupProps } from '$stylist/control/interface/component/toggles';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface ToggleGroupProps
	extends RecordArchitectureMerge<[BaseToggleGroupProps, InteractionHTMLAttributes<HTMLButtonElement>]>
{}
