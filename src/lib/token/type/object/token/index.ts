export type Token = {
	key: string;
	label: string;
	domain: string;
	controlKind: 'radio' | 'select';
	values: readonly (string | number | boolean)[];
};
