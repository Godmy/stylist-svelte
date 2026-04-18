import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ToastProps as BaseToastProps } from '$stylist/notification/type/struct/toast-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeToastProps extends StructIntersectAll<[BaseToastProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
