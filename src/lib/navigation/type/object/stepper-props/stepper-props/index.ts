import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export type StepperProps = LayoutHTMLAttributes<HTMLDivElement> & {
	steps: {
	id: string;
	title: string;
	description?: string;
	status: 'completed' | 'current' | 'upcoming';
	onClick?: () => void;
}[];
	orientation?: 'horizontal' | 'vertical';
	class?: string;
	stepClass?: string;
	connectorClass?: string;
	labelClass?: string;
	descriptionClass?: string;
};
