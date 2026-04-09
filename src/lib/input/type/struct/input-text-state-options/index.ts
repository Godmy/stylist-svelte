import type { InputStateOptions } from '$stylist/layout/type/struct/component-state-input-state-options';

export type InputTextStateOptions = InputStateOptions & {
	id?: string;
	helperText?: string;
	showHelperWhenError?: boolean;
	value?: string;
	maxlength?: number;
	autoResize?: boolean;
};
