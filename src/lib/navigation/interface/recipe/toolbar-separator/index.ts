/**
 * ToolbarSeparator — разделитель тулбара..
 *
 * LEGO-состав:

 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ToolbarSeparatorRecipe
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>
{}
