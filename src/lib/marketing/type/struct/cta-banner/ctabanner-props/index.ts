import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { CtaBannerButton } from '../ctabannerbutton';

export type CtaBannerProps = {
	title: string;
	description?: string;
	buttons: CtaBannerButton[];
	backgroundVariant?: TokenBackground;
	backgroundImage?: string;
	class?: string;
} & InformationHTMLAttributes<HTMLElement>;
