import type { TokenControlBase, TokenControlOption } from '$stylist/interaction/type/attribute/token-control';

export interface TokenRadioControlDefinition extends TokenControlBase {
	controlKind: 'radio';
	options: readonly TokenControlOption[];
}
