import type { BaseLayoutProps } from '$stylist/layout/type/struct/layout-extended/base-layout-props';

export type GridLayoutExtendedProps = BaseLayoutProps & {
	columns?: number;
	rows?: number;
	cols?: number;
};
