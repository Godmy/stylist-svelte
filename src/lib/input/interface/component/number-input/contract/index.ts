import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { INumberInputProps as BaseNumberInputProps } from '$stylist/input/interface/component/number-input/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface NumberInputProps
	extends RecordArchitectureMerge<[BaseNumberInputProps, InteractionHTMLAttributes<HTMLInputElement>]>
{}
