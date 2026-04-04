import type { TokenFunctionalTaxonomy } from '$stylist/architecture/type/enum/functional-taxonomy';
import type { TokenControlKind } from '$stylist/interaction/type/record/token-control-kind';
import type { TokenTokenValue } from '$stylist/information/type/enum/token-value';

export type TokenControlDomain = TokenFunctionalTaxonomy;

export type TokenValue = TokenTokenValue;

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
