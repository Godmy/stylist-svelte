import type { TokenTextControlDefinition } from '$stylist/token/type/struct/text-control-definition';

export type TokenTextControlProps = {
	definition: TokenTextControlDefinition;
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
};
