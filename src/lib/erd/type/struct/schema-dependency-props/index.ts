import type { SchemaDependency } from '$stylist/erd/type/struct/schema-dependency';

export type SchemaDependencyProps = {
	dependency: SchemaDependency;
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	active?: boolean;
};
