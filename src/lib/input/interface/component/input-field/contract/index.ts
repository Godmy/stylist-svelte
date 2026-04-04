import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { IInputFieldProps as BaseInputFieldProps } from '$stylist/input/interface/component/input/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface InputFieldProps
	extends RecordArchitectureMerge<[BaseInputFieldProps, InteractionHTMLAttributes<HTMLInputElement>]>
{}
