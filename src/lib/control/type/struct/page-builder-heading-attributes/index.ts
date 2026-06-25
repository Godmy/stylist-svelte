import type { PageBuilderTextAttributes } from '$stylist/control/type/struct/page-builder-text-attributes';

export type PageBuilderHeadingAttributes = PageBuilderTextAttributes & {
	level?: number;
};
