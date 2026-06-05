import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export type AccountProgressTrackerProps = InteractionHTMLAttributes<HTMLDivElement> & {
	steps?: string[];
	currentStep?: number;
	class?: string;
	[propName: string]: unknown;
};
