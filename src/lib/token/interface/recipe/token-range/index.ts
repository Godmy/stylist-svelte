import type { TokenRangeControlDefinition } from '$stylist/token/type/object/range-control-definition';

export interface RecipeTokenRange {
definition: TokenRangeControlDefinition;
	value?: number;
	onChange?: (value: number) => void;
}
