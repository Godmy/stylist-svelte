import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotMenuItem as MenuItemComponentProps } from '$stylist/control/interface/slot/menu-item';

export type MenuItemProps = MenuItemComponentProps & InteractionHTMLAttributes<HTMLElement>;
