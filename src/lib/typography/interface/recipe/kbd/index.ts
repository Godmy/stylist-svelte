import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotInlineBase as InlineBaseProps } from '$stylist/navigation/interface/slot/inline-base';

export interface ThemeKbdRecipe extends StructIntersectAll<[InlineBaseProps<HTMLElement>]> {}
