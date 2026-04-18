import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';

export type TokenTextStateProps = {
	definition: TokenTextControlDefinition;
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
};
