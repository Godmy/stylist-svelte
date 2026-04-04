import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { PageButtonProps as BasePageButtonProps } from '$stylist/control/interface/component/button/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface PageButtonProps
	extends RecordArchitectureMerge<[BasePageButtonProps, InteractionHTMLAttributes<HTMLButtonElement>]>
{}
