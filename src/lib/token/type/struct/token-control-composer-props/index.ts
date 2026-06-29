import type { TokenControlDefinition } from '$stylist/token/type/struct/token-control-definition';
import type { TokenTokenValue as TokenValue } from '$stylist/theme/type/alias/token-value';

export type TokenControlComposerProps = {
	definition: TokenControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
};
