import type { TokenControlBase, TokenControlOption } from '$stylist/interaction/type/attribute/token-control';

export interface TokenSelectControlDefinition extends TokenControlBase {
	controlKind: 'select';
	options: readonly TokenControlOption[];
}
