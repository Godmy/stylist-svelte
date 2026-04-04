/**
 * Skeleton Text — скелетон текста.
 *
 * LEGO-состав:
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface SkeletonTextRecipe
	extends RecordArchitectureMerge<[
		ISizable
	]>
{}
