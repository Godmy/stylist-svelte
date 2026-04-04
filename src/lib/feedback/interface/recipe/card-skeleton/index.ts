/**
 * Card Skeleton — скелетон карточки.
 *
 * LEGO-состав:
 *   ISizable                  (architecture/sizable)
 *   IElevatable               (architecture/elevatable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IElevatable } from '$stylist/architecture/interface/proto/elevatable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface CardSkeletonRecipe
	extends RecordArchitectureMerge<[
		ISizable,
		IElevatable
	]>
{}
