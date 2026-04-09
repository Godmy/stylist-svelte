import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item';

export type IMessageBubbleProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	author?: string;
	message?: string;
	timestamp?: string;
	align?: 'left' | 'right';
	avatar?: string;
	variant?: 'primary' | 'secondary';
};
