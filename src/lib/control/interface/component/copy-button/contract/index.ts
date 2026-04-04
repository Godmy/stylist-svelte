import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { CopyButtonProps as BaseCopyButtonProps } from '$stylist/control/interface/component/button/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface CopyButtonProps
	extends RecordArchitectureMerge<[BaseCopyButtonProps, InteractionHTMLAttributes<HTMLButtonElement>]>
{}
