export type ToggleGroupContext = {
	updateValue: (val: string) => void;
	value: string | string[] | null | undefined;
	disabled: boolean;
};
