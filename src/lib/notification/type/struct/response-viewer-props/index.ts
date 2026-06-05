import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export type ResponseViewerProps = InteractionHTMLAttributes<HTMLDivElement> & {
	title?: string;
	response?: string;
	status?: string;
	class?: string;
};
