import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ButtonAttributesBase } from '$stylist/control/interface/component/button/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface FollowButtonProps
	extends RecordArchitectureMerge<[ButtonAttributesBase, InteractionHTMLAttributes<HTMLButtonElement>]>
{}
