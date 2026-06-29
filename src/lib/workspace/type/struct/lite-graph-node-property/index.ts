import type { TokenPropertyType } from '$stylist/architecture/type/alias/property-type';

export type LiteGraphNodeProperty = {
	id: string;
	name: string;
	type?: TokenPropertyType;
	value?: unknown;
	label?: string;
	description?: string;
	options?: string[];
};
