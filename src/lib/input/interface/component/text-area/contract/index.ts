import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ITextareaProps as BaseTextAreaProps } from '$stylist/input/interface/component/input/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface TextAreaProps
	extends RecordArchitectureMerge<[BaseTextAreaProps, InteractionHTMLAttributes<HTMLTextAreaElement>]>
{}
