import type { TokenRadioControlDefinition } from '../radio-control-definition';
import type { TokenValue } from '../token-value';

export type TokenRadioControlProps = {
	definition: TokenRadioControlDefinition;
	value?: TokenValue;
	onChange?: (value: TokenValue) => void;
};
