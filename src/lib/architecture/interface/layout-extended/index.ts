import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenJustification } from '$stylist/architecture/type/token/justification';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { ChildrenHtmlAttributes } from '$stylist/architecture/type/attribute/children';
import type { LayoutSection } from '$stylist/architecture/type/attribute/layout-extended';

export interface VerticalLayoutProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	gap?: TokenSize;
	alignItems?: TokenAlignment;
	justifyContent?: TokenJustification;
	fillHeight?: boolean;
}

export interface HorizontalLayoutProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	sections?: LayoutSection[];
	direction?: TokenOrientation;
	gap?: TokenSize;
	alignItems?: TokenAlignment;
	justifyContent?: TokenJustification;
	responsive?: boolean;
	primarySize?: TokenSize | 'xl' | '2xl' | 'full';
	secondarySize?: TokenSize | 'xl' | '2xl' | 'full';
	wrap?: boolean;
}

export interface GridLayoutExtendedProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	cols?: number;
	gap?: TokenSize;
	responsive?: boolean;
	alignItems?: TokenAlignment;
	justifyContent?: TokenJustification;
}

export type { LayoutSection };
