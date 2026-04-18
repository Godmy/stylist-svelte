import type { ChildrenHtmlAttributes } from '$stylist/layout/type/struct/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotButtonAttributesBase as ButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';
import type { SlotButtonControl as ButtonControlProps } from '$stylist/control/interface/slot/button-control';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';
import type { SlotButtonControl } from '$stylist/control/interface/slot/button-control';

export interface RecipeButtonProps extends StructIntersectAll<[ SlotButtonAttributesBase, SlotButtonControl, InteractionHTMLAttributes<HTMLButtonElement>, ChildrenHtmlAttributes<HTMLButtonElement> ]> {}
