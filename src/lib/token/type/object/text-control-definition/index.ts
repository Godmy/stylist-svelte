import type { TokenControlDefinitionData } from '$stylist/token/type/object/token-control-definition-data';

export type TokenTextControlDefinition = TokenControlDefinitionData & {
	controlKind: 'text';
	placeholder?: string;
};
