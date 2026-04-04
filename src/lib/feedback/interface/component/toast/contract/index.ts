import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { IToastProps as BaseToastProps } from '$stylist/feedback/type/struct/toast';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface ToastProps
	extends RecordArchitectureMerge<[BaseToastProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
