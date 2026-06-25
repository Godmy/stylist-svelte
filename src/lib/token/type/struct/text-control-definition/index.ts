import type { TokenControlDefinitionData } from '$stylist/token/type/struct/token-control-definition-data';

export type TokenTextControlDefinition = TokenControlDefinitionData & {
	controlKind: 'text';
	placeholder?: string;
};
