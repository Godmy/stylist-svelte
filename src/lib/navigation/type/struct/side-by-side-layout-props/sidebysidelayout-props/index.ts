import type { SideBySideLayoutRestProps } from '$stylist/navigation/type/struct/side-by-side-layout-props/sidebysidelayoutrest-props';
import type { SideBySideSection } from '$stylist/navigation/type/struct/side-by-side-layout-props/sidebysidesection';

export type SideBySideLayoutProps = SideBySideLayoutRestProps & {
	sections: SideBySideSection[];
	class?: string;
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	responsive?: boolean;
};
