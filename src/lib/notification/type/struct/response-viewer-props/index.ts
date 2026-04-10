import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface ResponseViewerProps extends InteractionHTMLAttributes<HTMLDivElement> {
	title?: string;
	response?: string;
	status?: string;
	class?: string;
}
