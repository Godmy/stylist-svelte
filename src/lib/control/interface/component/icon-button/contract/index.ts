import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { IconButtonProps as BaseIconButtonProps } from '$stylist/control/interface/component/button/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface IconButtonProps
	extends RecordArchitectureMerge<[BaseIconButtonProps, InteractionHTMLAttributes<HTMLButtonElement>]>
{}
