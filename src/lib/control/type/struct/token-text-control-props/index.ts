import type { TokenTextControlDefinition } from '../text-control-definition';

export type TokenTextControlProps = {
	definition: TokenTextControlDefinition;
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
};
