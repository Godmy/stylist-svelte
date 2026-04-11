import type { ArchitectureHTMLAttributes } from '$stylist/architecture';
import type { Step } from '../step';

export type StepperProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	steps: Step[];
	orientation?: 'horizontal' | 'vertical';
	class?: string;
	stepClass?: string;
	connectorClass?: string;
	labelClass?: string;
	descriptionClass?: string;
};
