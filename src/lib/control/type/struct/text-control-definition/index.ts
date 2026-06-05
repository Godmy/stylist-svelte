import type { TokenControlDefinitionData } from '$stylist/control/type/struct/token-control-domain/tokencontroldefinitiondata';

export type TokenTextControlDefinition = TokenControlDefinitionData & {
	controlKind: 'text';
	placeholder?: string;
};
