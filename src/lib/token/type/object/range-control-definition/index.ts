import type { TokenControlDefinitionData } from '$stylist/token/type/object/token-control-definition-data';

export type TokenRangeControlDefinition = TokenControlDefinitionData & {
	controlKind: 'range';
	min: number;
	max: number;
	step?: number;
};
