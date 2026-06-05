import type { TokenControlDefinitionData } from '$stylist/control/type/struct/token-control-domain/tokencontroldefinitiondata';
import type { TokenControlOption } from '$stylist/control/type/struct/token-control-option';

export type TokenRadioControlDefinition = TokenControlDefinitionData & {
	controlKind: 'radio';
	options: TokenControlOption[];
};
