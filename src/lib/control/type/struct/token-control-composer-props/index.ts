import type { TokenControlDefinition } from '../token-control-definition';
import type { TokenValue } from '../token-value';

export type TokenControlComposerProps = {
	definition: TokenControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
};
