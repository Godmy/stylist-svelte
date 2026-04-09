import type { TokenControlDefinitionData } from '$stylist/control/type/struct/token-control-domain';
import type { TokenControlOption } from '$stylist/control/type/struct/token-control-option';

export interface TokenSelectControlDefinition extends TokenControlDefinitionData {
	controlKind: 'select';
	options: TokenControlOption[];
}
