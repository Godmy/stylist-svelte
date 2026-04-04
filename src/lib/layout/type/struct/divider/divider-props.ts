import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

export type DividerProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	orientation?: 'horizontal' | 'vertical';
	align?: string;
	dashed?: boolean;
	label?: string;
};
