import type { HTMLAttributes } from 'svelte/elements';
import type { ToastProps as BaseToastProps } from '$stylist/notification/type/struct/toast-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeToastProps
	extends ComputeIntersectAll<[BaseToastProps, HTMLAttributes<HTMLDivElement>]> {}
