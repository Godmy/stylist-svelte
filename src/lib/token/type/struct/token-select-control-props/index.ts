import type { TokenSelectControlDefinition } from '$stylist/token/type/struct/select-control-definition';
import type { TokenTokenValue as TokenValue } from '$stylist/theme/type/enum/token-value';

export type TokenSelectControlProps = {
	definition: TokenSelectControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
};
