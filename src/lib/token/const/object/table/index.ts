import type { Token } from '$stylist/token/type/struct/token';
import { PLAYGROUND_COMPONENT_CATALOG_SORT_BY } from '$stylist/table/const/array/playground-component-catalog-sort-by';
import { PLAYGROUND_COMPONENT_CATALOG_VIEW_MODE } from '$stylist/table/const/array/playground-component-catalog-view-mode';

export const TOKEN_TABLE_SETTING = [
	{ key: 'playground-component-catalog-sort-by', label: 'Playground Component Catalog Sort By', domain: 'table', controlKind: 'radio', values: PLAYGROUND_COMPONENT_CATALOG_SORT_BY },
	{ key: 'playground-component-catalog-view-mode', label: 'Playground Component Catalog View Mode', domain: 'table', controlKind: 'radio', values: PLAYGROUND_COMPONENT_CATALOG_VIEW_MODE }
] satisfies readonly Token[];