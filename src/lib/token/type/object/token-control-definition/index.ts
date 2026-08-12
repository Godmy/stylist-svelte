import type { TokenRadioControlDefinition } from '$stylist/token/type/object/radio-control-definition';
import type { TokenRangeControlDefinition } from '$stylist/token/type/object/range-control-definition';
import type { TokenSelectControlDefinition } from '$stylist/token/type/object/select-control-definition';
import type { TokenTextControlDefinition } from '$stylist/token/type/object/text-control-definition';

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenRangeControlDefinition
	| TokenSelectControlDefinition
	| TokenTextControlDefinition;
