import type { TokenControlDefinitionData } from '$stylist/control/type/struct/token-control-domain';

export interface TokenTextControlDefinition extends TokenControlDefinitionData {
	controlKind: 'text';
	placeholder?: string;
}
