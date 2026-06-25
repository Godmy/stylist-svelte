import type { TokenRangeControlDefinition } from '$stylist/token/type/struct/range-control-definition';

export type TokenRangeControlProps = {
	definition: TokenRangeControlDefinition;
	value?: number;
	onChange?: (value: number) => void;
};
