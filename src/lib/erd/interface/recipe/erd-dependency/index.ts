import type { SchemaDependency } from '$stylist/erd/type/object/schema-dependency';
export interface RecipeErdDepencency {
	dependency: SchemaDependency;
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	active?: boolean;
}
