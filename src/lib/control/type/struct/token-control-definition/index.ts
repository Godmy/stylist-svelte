import type { TokenControlDefinitionData, TokenControlKind } from '$stylist/control/type/struct/token-control-domain';
import type { TokenRadioControlDefinition } from '$stylist/control/type/struct/radio-control-definition';
import type { TokenRangeControlDefinition } from '$stylist/control/type/struct/range-control-definition';
import type { TokenSelectControlDefinition } from '$stylist/control/type/struct/select-control-definition';
import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';
import type { TokenValue } from '$stylist/control/type/struct/token-value';

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenRangeControlDefinition
	| TokenSelectControlDefinition
	| TokenTextControlDefinition;
