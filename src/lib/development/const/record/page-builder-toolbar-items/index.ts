import type { TokenComponentType } from '$stylist/development/type/alias/component-type';
import { PAGE_BUILDER_ICON } from '$stylist/development/const/map/page-builder-icons';

export const PAGE_BUILDER_TOOLBAR_ITEMS: {
	type: TokenComponentType;
	label: string;
	icon: string;
}[] = [
	{ type: 'text', label: 'Text', icon: PAGE_BUILDER_ICON.TYPE },
	{ type: 'heading', label: 'Heading', icon: PAGE_BUILDER_ICON.TYPE },
	{ type: 'image', label: 'Image', icon: PAGE_BUILDER_ICON.IMAGE },
	{ type: 'button', label: 'Button', icon: PAGE_BUILDER_ICON.SQUARE },
	{ type: 'divider', label: 'Divider', icon: PAGE_BUILDER_ICON.SQUARE },
	{ type: 'container', label: 'Container', icon: PAGE_BUILDER_ICON.SQUARE },
	{ type: 'grid', label: 'Grid', icon: PAGE_BUILDER_ICON.COLUMNS_2 }
];
