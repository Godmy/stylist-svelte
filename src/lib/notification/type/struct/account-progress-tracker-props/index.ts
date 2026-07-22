import type { HTMLAttributes } from 'svelte/elements';

export type AccountProgressTrackerProps = HTMLAttributes<HTMLDivElement> & {
	steps?: string[];
	currentStep?: number;
	class?: string;
	[propName: string]: unknown;
};
