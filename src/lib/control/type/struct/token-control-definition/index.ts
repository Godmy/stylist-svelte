import type { TokenRadioControlDefinition } from '$stylist/control/type/struct/radio-control-definition';
import type { TokenRangeControlDefinition } from '$stylist/control/type/struct/range-control-definition';
import type { TokenSelectControlDefinition } from '$stylist/control/type/struct/select-control-definition';
import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenRangeControlDefinition
	| TokenSelectControlDefinition
	| TokenTextControlDefinition;
