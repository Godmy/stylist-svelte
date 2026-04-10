import type { TokenRangeControlDefinition } from '../range-control-definition';

export type TokenRangeControlProps = {
	definition: TokenRangeControlDefinition;
	value?: number;
	onChange?: (value: number) => void;
};
