/**
 * Card Skeleton — скелетон карточки.
 *
 * LEGO-состав:
 *   ISizable                  (architecture/sizable)
 *   IElevatable               (architecture/elevatable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IElevatable } from '$stylist/layout/interface/proto/elevatable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';

export interface CardSkeletonRecipe
	extends RecordArchitectureMerge<[
		ISizable,
		IElevatable
	]>
{}
