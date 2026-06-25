import type { TokenRadioControlDefinition } from '$stylist/token/type/struct/radio-control-definition';
import type { TokenRangeControlDefinition } from '$stylist/token/type/struct/range-control-definition';
import type { TokenSelectControlDefinition } from '$stylist/token/type/struct/select-control-definition';
import type { TokenTextControlDefinition } from '$stylist/token/type/struct/text-control-definition';

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenRangeControlDefinition
	| TokenSelectControlDefinition
	| TokenTextControlDefinition;
