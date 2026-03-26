import type { TokenControlBase } from '$stylist/interaction/type/attribute/token-control';

export interface TokenRangeControlDefinition extends TokenControlBase {
	controlKind: 'range';
	min: number;
	max: number;
	step?: number;
}
