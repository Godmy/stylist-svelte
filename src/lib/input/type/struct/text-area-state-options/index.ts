import type { InputStateOptions } from '$stylist/layout/type/struct/component-state-input-state-options';

export type TextAreaStateOptions = InputStateOptions & {
	id?: string;
	value?: string;
	maxlength?: number;
	helperText?: string;
	showHelperWhenError?: boolean;
	autoResize?: boolean;
};
