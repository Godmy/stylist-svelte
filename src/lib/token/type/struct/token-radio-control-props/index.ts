import type { TokenRadioControlDefinition } from '$stylist/token/type/struct/radio-control-definition';
import type { TokenTokenValue as TokenValue } from '$stylist/theme/type/enum/token-value';

export type TokenRadioControlProps = {
	definition: TokenRadioControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
};
