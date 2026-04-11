import type { TokenControlDefinitionData } from '$stylist/control/type/struct/token-control-domain';

export type TokenTextControlDefinition = TokenControlDefinitionData & {
	controlKind: 'text';
	placeholder?: string;
}
