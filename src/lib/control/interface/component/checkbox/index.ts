import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { CheckboxProps as BaseCheckboxProps } from '$stylist/control/interface/component/toggles';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface CheckboxProps
	extends RecordArchitectureMerge<[BaseCheckboxProps, InteractionHTMLAttributes<HTMLInputElement>]>
{}
