import type { TokenFunctionalTaxonomy } from '$stylist/architecture/type/token/functional-taxonomy';
import type { TokenControlKind } from '$stylist/interaction/type/token/token-control-kind';
import type { TokenValue } from '$stylist/information/type/token/token-value';

export type TokenControlDomain = TokenFunctionalTaxonomy;

export type TokenControlOption = {
	label: string;
	value: TokenValue;
};

export type TokenControlBase = {
	id: string;
	functionalTaxonomy: TokenControlDomain;
	tokenFile: string;
	tokenName: string;
	controlKind: TokenControlKind;
	defaultValue?: TokenValue;
	description?: string;
};
