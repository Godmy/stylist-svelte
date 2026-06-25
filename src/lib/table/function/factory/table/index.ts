/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { TableSchema } from '$stylist/table/type/schema/table';

export function createTable<T>(schema: TableSchema<T>) {
	return {
		schema,
		createState(data: T[]) {
			return { data, schema };
		}
	};
}
