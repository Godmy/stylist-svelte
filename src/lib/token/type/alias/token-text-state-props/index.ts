import type { TokenTextControlDefinition } from '$stylist/token/type/struct/text-control-definition';

export type TokenTextStateProps = {
	definition: TokenTextControlDefinition;
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
};
