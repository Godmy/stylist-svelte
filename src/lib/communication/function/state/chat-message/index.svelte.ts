import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

type MessageStatus = 'sent' | 'delivered' | 'read';

export const createChatMessageState = (props: {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: MessageStatus;
	isOwn?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: TokenAppearance;
}) => {
	const alignmentClass = $derived(props.isOwn ? 'justify-end' : 'justify-start');

	const bgClass = $derived(
		props.isOwn
			? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
			: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
	);

	const variantClass = $derived(
		(({
			default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
			primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
			secondary: 'bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)]'
		}) as Partial<Record<string, string>>)[props.variant ?? 'default'] ?? ''
	);

	const bubbleShapeClass = $derived(props.isOwn ? 'rounded-br-none' : 'rounded-bl-none');

	const statusIcon = $derived(
		({
			sent: 'check',
			delivered: 'check',
			read: 'check-check'
		})[props.status ?? 'sent']
	);

	const statusIconClasses = $derived(
		`ml-1 h-3 w-3 ${props.status === 'read' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-tertiary)]'}`
	);

	const containerClasses = $derived(`flex ${alignmentClass} mb-4 ${props.class ?? ''}`.trim());

	const contentClasses = $derived(`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${props.contentClass ?? ''}`.trim());

	const headerClasses = $derived(`flex items-center mb-1 ${props.headerClass ?? ''}`.trim());

	const footerClasses = $derived(
		`flex items-center justify-end mt-1 text-xs text-[var(--color-text-secondary)] ${props.footerClass ?? ''}`.trim()
	);

	return {
		get alignmentClass() {
			return alignmentClass;
		},
		get bgClass() {
			return bgClass;
		},
		get variantClass() {
			return variantClass;
		},
		get bubbleShapeClass() {
			return bubbleShapeClass;
		},
		get statusIcon() {
			return statusIcon;
		},
		get statusIconClasses() {
			return statusIconClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get footerClasses() {
			return footerClasses;
		}
	};
};

export default createChatMessageState;
