import type { TokenComponentType } from '$stylist/architecture/type/alias/component-type';
import type { PageBuilderTextAttributes } from '$stylist/control/type/struct/page-builder-element-attributes/pagebuildertextattributes';
import type { PageBuilderHeadingAttributes } from '$stylist/control/type/struct/page-builder-element-attributes/pagebuilderheadingattributes';
import type { PageBuilderButtonAttributes } from '$stylist/control/type/struct/page-builder-element-attributes/pagebuilderbuttonattributes';
import type { PageBuilderImageAttributes } from '$stylist/control/type/struct/page-builder-element-attributes/pagebuilderimageattributes';
import type { PageBuilderDividerAttributes } from '$stylist/control/type/struct/page-builder-element-attributes/pagebuilderdividerattributes';
import type { PageBuilderContainerAttributes } from '$stylist/control/type/struct/page-builder-element-attributes/pagebuildercontainerattributes';

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
