import type { ContractAvatar as AvatarContract } from '$stylist/media/interface/contract/avatar';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type AvatarProps = AvatarContract & InformationHTMLAttributes<HTMLDivElement>;
