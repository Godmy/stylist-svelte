import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotStepConnector extends HtmlAttributesBase<HTMLDivElement> {
	active?: boolean;
	completed?: boolean;
	status?: 'pending' | 'active' | 'completed' | 'error';
}
