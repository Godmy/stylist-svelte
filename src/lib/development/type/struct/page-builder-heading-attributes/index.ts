import type { PageBuilderTextAttributes } from '$stylist/development/type/struct/page-builder-text-attributes';

export type PageBuilderHeadingAttributes = PageBuilderTextAttributes & {
	level?: number;
};
