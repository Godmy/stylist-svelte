import type { TokenComponentType } from '$stylist/architecture/type/alias/component-type';
import type { PageBuilderTextAttributes } from '$stylist/development/type/struct/page-builder-element-attributes/pagebuildertextattributes';
import type { PageBuilderHeadingAttributes } from '$stylist/development/type/struct/page-builder-element-attributes/pagebuilderheadingattributes';
import type { PageBuilderButtonAttributes } from '$stylist/development/type/struct/page-builder-element-attributes/pagebuilderbuttonattributes';
import type { PageBuilderImageAttributes } from '$stylist/development/type/struct/page-builder-element-attributes/pagebuilderimageattributes';
import type { PageBuilderDividerAttributes } from '$stylist/development/type/struct/page-builder-element-attributes/pagebuilderdividerattributes';
import type { PageBuilderContainerAttributes } from '$stylist/development/type/struct/page-builder-element-attributes/pagebuildercontainerattributes';

export type PageBuilderElement = {
	id: string;
	type: TokenComponentType;
	content?: string;
	attributes?:
		| PageBuilderTextAttributes
		| PageBuilderHeadingAttributes
		| PageBuilderButtonAttributes
		| PageBuilderImageAttributes
		| PageBuilderDividerAttributes
		| PageBuilderContainerAttributes;
	children?: PageBuilderElement[];
};
