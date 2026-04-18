import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotCopyButton as BaseCopyButtonProps } from '$stylist/control/interface/slot/copy-button';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeCopyButtonProps extends StructIntersectAll<[BaseCopyButtonProps, InteractionHTMLAttributes<HTMLButtonElement>]> {}
