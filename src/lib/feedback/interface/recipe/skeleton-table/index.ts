/**
 * Skeleton Table — скелетон таблицы.
 *
 * LEGO-состав:
 *   ISizable                  (architecture/sizable)
 *   IScrollable               (architecture/scrollable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IScrollable } from '$stylist/architecture/interface/proto/scrollable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface SkeletonTableRecipe
	extends RecordArchitectureMerge<[
		ISizable,
		IScrollable
	]>
{}
