import type { TokenControlBase } from '$stylist/interaction/type/attribute/token-control';

export interface TokenTextControlDefinition extends TokenControlBase {
	controlKind: 'text';
	placeholder?: string;
}
