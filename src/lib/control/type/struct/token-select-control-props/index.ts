import type { TokenSelectControlDefinition } from '../select-control-definition';
import type { TokenValue } from '../token-value';

export type TokenSelectControlProps = {
	definition: TokenSelectControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
};
