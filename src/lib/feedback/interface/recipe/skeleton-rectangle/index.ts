/**
 * Skeleton Rectangle — прямоугольный скелетон.
 *
 * LEGO-состав:
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface SkeletonRectangleRecipe
	extends RecordArchitectureMerge<[
		ISizable
	]>
{}
