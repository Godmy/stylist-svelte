import type { TokenFunctionalTaxonomy } from '$stylist/architecture/type/enum/functional-taxonomy';
import type { TokenControlKind } from '$stylist/interaction/type/record/token-control-kind';
import type { TokenControlBase, TokenControlOption } from '$stylist/control/type/struct/token-control';
import type { TokenTokenValue } from '$stylist/information/type/enum/token-value';

export interface TokenRadioControlDefinition extends TokenControlBase {
	controlKind: 'radio';
	options: TokenControlOption[];
}

export interface TokenSelectControlDefinition extends TokenControlBase {
	controlKind: 'select';
	options: TokenControlOption[];
}

export interface TokenRangeControlDefinition extends TokenControlBase {
	controlKind: 'range';
	min: number;
	max: number;
	step?: number;
}

export interface TokenTextControlDefinition extends TokenControlBase {
	controlKind: 'text';
	placeholder?: string;
}

export type TokenDomain = TokenFunctionalTaxonomy;

export type {
	TokenControlBase,
	TokenControlKind,
	TokenControlOption,
	TokenControlOption as TokenOption,
	TokenTokenValue as TokenValue
};

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenSelectControlDefinition
	| TokenRangeControlDefinition
	| TokenTextControlDefinition;
