import type { TokenFunctionalTaxonomy } from '$stylist/architecture/type/token/functional-taxonomy';
import type { TokenRadioControlDefinition } from '$stylist/interaction/interface/token-radio-control-definition';
import type { TokenRangeControlDefinition } from '$stylist/interaction/interface/token-range-control-definition';
import type { TokenSelectControlDefinition } from '$stylist/interaction/interface/token-select-control-definition';
import type { TokenTextControlDefinition } from '$stylist/interaction/interface/token-text-control-definition';
import type { TokenControlKind } from '$stylist/interaction/type/token/token-control-kind';
import type { TokenControlBase, TokenControlOption } from '$stylist/interaction/type/attribute/token-control';
import type { TokenValue } from '$stylist/information/type/token/token-value';

export type TokenDomain = TokenFunctionalTaxonomy;

export type {
	TokenControlBase,
	TokenControlKind,
	TokenControlOption,
	TokenControlOption as TokenOption,
	TokenRadioControlDefinition,
	TokenRangeControlDefinition,
	TokenSelectControlDefinition,
	TokenTextControlDefinition,
	TokenValue
};

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenSelectControlDefinition
	| TokenRangeControlDefinition
	| TokenTextControlDefinition;
