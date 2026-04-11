import type { TokenControlDefinitionData } from '$stylist/control/type/struct/token-control-domain';

export type TokenRangeControlDefinition = TokenControlDefinitionData & {
	controlKind: 'range';
	min: number;
	max: number;
	step?: number;
}
