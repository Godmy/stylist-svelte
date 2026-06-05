export interface LiteGraphNodeProperty {
	id: string;
	name: string;
	type: string;
	value: unknown;
	label?: string;
	description?: string;
	options?: Record<string, unknown>[];
}
