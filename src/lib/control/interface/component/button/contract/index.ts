import type { ChildrenHtmlAttributes } from '$stylist/layout/type/struct/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ButtonAttributesBase, ButtonControlProps } from '$stylist/control/interface/component/button/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface ButtonProps
	extends RecordArchitectureMerge<[
		ButtonAttributesBase,
		ButtonControlProps,
		InteractionHTMLAttributes<HTMLButtonElement>,
		ChildrenHtmlAttributes<HTMLButtonElement>
	]>
{}
