import type { TokenControlDefinitionData } from '$stylist/control/type/struct/token-control-domain';

export interface TokenRangeControlDefinition extends TokenControlDefinitionData {
	controlKind: 'range';
	min: number;
	max: number;
	step?: number;
}
