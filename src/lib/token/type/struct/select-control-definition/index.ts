import type { TokenControlDefinitionData } from '$stylist/token/type/struct/token-control-definition-data';
import type { TokenControlOption } from '$stylist/token/type/struct/token-control-option';

export type TokenSelectControlDefinition = TokenControlDefinitionData & {
	controlKind: 'select';
	options: TokenControlOption[];
};
