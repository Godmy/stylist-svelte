import type { TokenControlDefinition } from '../token-control-definition';
import type { TokenTokenValue as TokenValue } from '$stylist/theme/type/enum/token-value';

export type TokenControlComposerProps = {
	definition: TokenControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
};
