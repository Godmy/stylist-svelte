import type { AvatarContract } from '$stylist/media/interface/component/avatar/contract';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type { AvatarSize, AvatarUserStatus } from '$stylist/media/interface/component/avatar/contract';
export type AvatarProps = AvatarContract & InformationHTMLAttributes<HTMLDivElement>;
