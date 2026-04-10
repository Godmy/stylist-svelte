import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ToastProps as BaseToastProps } from '$stylist/notification/type/struct/toast-props';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface ToastProps
	extends RecordArchitectureMerge<[BaseToastProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
