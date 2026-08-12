import type { PageBuilderTextAttributes } from '$stylist/development/type/object/page-builder-text-attributes';

export type PageBuilderHeadingAttributes = PageBuilderTextAttributes & {
	level?: number;
};
