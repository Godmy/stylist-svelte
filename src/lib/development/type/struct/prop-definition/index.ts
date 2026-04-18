export type PropDefinition = {
	name: string;
	type: string;
	defaultValue?: unknown;
	description?: string;
	options?: string[];
	min?: number;
	max?: number;
	step?: number;
};
