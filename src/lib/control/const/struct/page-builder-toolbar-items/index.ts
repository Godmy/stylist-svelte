import type { PageBuilderToolbarItem } from '../../../type/struct/page-builder-toolbar-item';
import {
	PAGE_BUILDER_ICON_COLUMNS_2,
	PAGE_BUILDER_ICON_IMAGE,
	PAGE_BUILDER_ICON_SQUARE,
	PAGE_BUILDER_ICON_TYPE
} from '../../../const/map/page-builder-icons';

export const PAGE_BUILDER_TOOLBAR_ITEMS: PageBuilderToolbarItem[] = [
	{ type: 'text', label: 'Text', icon: PAGE_BUILDER_ICON_TYPE },
	{ type: 'heading', label: 'Heading', icon: PAGE_BUILDER_ICON_TYPE },
	{ type: 'image', label: 'Image', icon: PAGE_BUILDER_ICON_IMAGE },
	{ type: 'button', label: 'Button', icon: PAGE_BUILDER_ICON_SQUARE },
	{ type: 'divider', label: 'Divider', icon: PAGE_BUILDER_ICON_SQUARE },
	{ type: 'container', label: 'Container', icon: PAGE_BUILDER_ICON_SQUARE },
	{ type: 'grid', label: 'Grid', icon: PAGE_BUILDER_ICON_COLUMNS_2 }
];
