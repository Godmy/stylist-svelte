import type { TokenControlDefinitionData } from '$stylist/token/type/object/token-control-definition-data';
import type { TokenControlOption } from '$stylist/token/type/object/token-control-option';

export type TokenRadioControlDefinition = TokenControlDefinitionData & {
	controlKind: 'radio';
	options: TokenControlOption[];
};
