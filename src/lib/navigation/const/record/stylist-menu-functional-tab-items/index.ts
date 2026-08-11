import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';
export const STYLIST_MENU_FUNCTIONAL_TAB_ITEMS: ({
	id: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
	label: string;
	icon: string;
})[] = [
	{ id: 'architecture', label: 'Architecture', icon: 'grid-layout' },
	{ id: 'information', label: 'Information', icon: 'text' },
	{ id: 'interaction', label: 'Interaction', icon: 'controls' }
];
