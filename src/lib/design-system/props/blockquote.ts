import type { ChildrenProp, BlockquoteAttributesBase } from './common';

export interface BlockquoteProps extends BlockquoteAttributesBase {
	cite?: string;
	withBorder?: boolean;
	withBackground?: boolean;
	children?: ChildrenProp['children'];
}
