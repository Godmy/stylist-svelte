import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotAccountProgressTracker extends HtmlAttributesBase<HTMLDivElement> {
	currentStep: number;
	totalSteps?: number;
	completedSteps?: number[];
	steps?: string[];
}
