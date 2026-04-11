import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type AccountProgressTrackerProps = InteractionHTMLAttributes<HTMLDivElement> & {
	steps?: string[];
	currentStep?: number;
	class?: string;
	[propName: string]: unknown;
}
