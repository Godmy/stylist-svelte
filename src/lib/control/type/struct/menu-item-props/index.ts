import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { MenuItemProps as MenuItemComponentProps } from '$stylist/control/interface/component/menu-item/other';

export type MenuItemProps = MenuItemComponentProps & InteractionHTMLAttributes<HTMLElement>;
