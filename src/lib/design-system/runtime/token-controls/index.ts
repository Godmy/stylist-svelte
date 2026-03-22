import type { TokenFunctionalTaxonomy as TokenDomain } from '$stylist/design-system/tokens/architecture/functional-taxonomy';
import type { TokenControlKind } from '$stylist/design-system/tokens/interaction/token-control-kind';
import type { TokenValue } from '$stylist/design-system/tokens/information/token-value';

export type { TokenControlKind, TokenDomain, TokenValue };

export interface TokenOption {
	label: string;
	value: TokenValue;
}

interface TokenControlBase {
	id: string;
	functionalTaxonomy: TokenDomain;
	tokenFile: string;
	tokenName: string;
	controlKind: TokenControlKind;
	defaultValue?: TokenValue;
	description?: string;
}

export interface TokenRadioControlDefinition extends TokenControlBase {
	controlKind: 'radio';
	options: readonly TokenOption[];
}

export interface TokenSelectControlDefinition extends TokenControlBase {
	controlKind: 'select';
	options: readonly TokenOption[];
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

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenSelectControlDefinition
	| TokenRangeControlDefinition
	| TokenTextControlDefinition;
