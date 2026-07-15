import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';

export type FunctionalTabItem = {
	id: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
	label: string;
	icon: string;
};
