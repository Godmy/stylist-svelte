import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { RadioProps as BaseRadioProps } from '$stylist/control/interface/component/toggles';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface RadioProps
	extends RecordArchitectureMerge<[BaseRadioProps, InteractionHTMLAttributes<HTMLInputElement>]>
{}
