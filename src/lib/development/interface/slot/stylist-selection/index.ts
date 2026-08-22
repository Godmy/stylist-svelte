import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/development/const/array/functional-taxonomy';

export interface StylistSelection {
	category: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
	option: string;
	selections: Record<(typeof TOKEN_FUNCTIONAL_TAXONOMY)[number], string>;
}
