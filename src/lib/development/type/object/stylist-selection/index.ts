import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';

export type StylistSelection = {
	category: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
	option: string;
	selections: Record<(typeof TOKEN_FUNCTIONAL_TAXONOMY)[number], string>;
};
