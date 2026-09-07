import type { PageBuilderTextAttributes } from '$stylist/development/interface/slot/page-builder-text-attributes';

export interface PageBuilderHeadingAttributes extends PageBuilderTextAttributes {
	level?: number;
}
