import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import type { ChildrenProp, ClassProp } from '$stylist/design-system/contracts/information/common';

export interface BlockquoteProps extends Omit<HTMLBlockquoteAttributes, 'class'>, ClassProp {
	cite?: string;
	withBorder?: boolean;
	withBackground?: boolean;
	children?: ChildrenProp['children'];
}



