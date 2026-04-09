import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type SideBySideSection = {
	id: string;
	content: Snippet;
	size?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';
	className?: string;
};

export type SideBySideLayoutRestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;

export interface SideBySideLayoutProps extends SideBySideLayoutRestProps {
	sections: SideBySideSection[];
	class?: string;
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	responsive?: boolean;
}
