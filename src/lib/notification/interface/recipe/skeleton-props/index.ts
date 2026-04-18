import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotSkeleton as BaseSkeletonProps } from '$stylist/notification/interface/slot/skeleton';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeSkeletonProps extends StructIntersectAll<[BaseSkeletonProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
