import type { TokenControlDefinitionData } from '$stylist/token/type/struct/token-control-definition-data';

export type TokenRangeControlDefinition = TokenControlDefinitionData & {
	controlKind: 'range';
	min: number;
	max: number;
	step?: number;
};
