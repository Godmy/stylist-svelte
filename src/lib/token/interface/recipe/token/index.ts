import type { TokenControlDefinition } from '$stylist/token/type/object/token-control-definition';
import type { TokenTokenValue as TokenValue } from '$stylist/theme/type/alias/token-value';

export interface RecipeToken {
	definition: TokenControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
}
