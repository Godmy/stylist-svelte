import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface AccountProgressTrackerProps extends InteractionHTMLAttributes<HTMLDivElement> {
	steps?: string[];
	currentStep?: number;
	class?: string;
	[propName: string]: unknown;
}
