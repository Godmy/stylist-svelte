import type { IconContract } from '$stylist/media/interface/component/icon/contract';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type { IconSize, IconDirection, IconVariant, IconShape, IconColor } from '$stylist/media/interface/component/icon/contract';
export type IconProps = IconContract & InformationHTMLAttributes<HTMLSpanElement>;
