import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { Step } from '$stylist/navigation/type/struct/stepper-props/step';

export type StepperProps = LayoutHTMLAttributes<HTMLDivElement> & {
	steps: Step[];
	orientation?: 'horizontal' | 'vertical';
	class?: string;
	stepClass?: string;
	connectorClass?: string;
	labelClass?: string;
	descriptionClass?: string;
};
