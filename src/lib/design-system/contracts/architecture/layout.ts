import type { Snippet } from 'svelte';

import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { GridItem } from '$stylist/design-system/tokens/architecture/layout';

export interface GridLayoutProps extends HtmlAttributesBase<HTMLDivElement> {
	items: GridItem[];
	columns?: string;
	gap?: string;
	itemClass?: string;
}



