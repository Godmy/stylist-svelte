import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import type { ChildrenProp, ClassProp } from '$stylist/information/type/attribute/common';

export interface BlockquoteProps extends Omit<HTMLBlockquoteAttributes, 'class'>, ClassProp {
	cite?: string;
	withBorder?: boolean;
	withBackground?: boolean;
	children?: ChildrenProp['children'];
}



