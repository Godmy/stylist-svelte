import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type Step = {
	id: string;
	title: string;
	description?: string;
	status: 'completed' | 'current' | 'upcoming';
	onClick?: () => void;
};

export interface StepperProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	steps: Step[];
	orientation?: 'horizontal' | 'vertical';
	class?: string;
	stepClass?: string;
	connectorClass?: string;
	labelClass?: string;
	descriptionClass?: string;
}
