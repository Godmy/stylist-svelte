export type PromoBannerVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

const VARIANT_CLASSES: Record<PromoBannerVariant, string> = {
	primary: 'bg-[var(--color-primary-50)] border-[var(--color-primary-200)] text-[var(--color-primary-800)]',
	secondary: 'bg-[var(--color-background-secondary)] border-[var(--color-border-primary)] text-[var(--color-text-primary)]',
	success: 'bg-[var(--color-success-50)] border-[var(--color-success-200)] text-[var(--color-success-800)]',
	warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
	danger: 'bg-[var(--color-danger-50)] border-[var(--color-danger-200)] text-[var(--color-danger-800)]'
};

export interface PromoBannerProps {
	title?: string;
	description?: string;
	cta?: string;
	link?: string;
	image?: string;
	variant?: PromoBannerVariant;
	onCtaClick?: () => void;
	class?: string;
}

export function createPromoBannerState(props: PromoBannerProps) {
	const title = $derived(props.title ?? '');
	const description = $derived(props.description ?? '');
	const cta = $derived(props.cta ?? 'Learn More');
	const link = $derived(props.link ?? '#');
	const image = $derived(props.image ?? '');
	const variant = $derived(props.variant ?? 'primary');
	const onCtaClick = $derived(props.onCtaClick ?? (() => {}));
	const className = $derived(props.class ?? '');
	const variantClasses = $derived(VARIANT_CLASSES[variant as PromoBannerVariant]);
	const hostClasses = $derived(`border rounded-lg p-6 flex flex-col md:flex-row items-center ${variantClasses} ${className}`);

	return {
		get title() { return title; },
		get description() { return description; },
		get cta() { return cta; },
		get link() { return link; },
		get image() { return image; },
		get variant() { return variant; },
		get onCtaClick() { return onCtaClick; },
		get className() { return className; },
		get variantClasses() { return variantClasses; },
		get hostClasses() { return hostClasses; }
	};
}

export default createPromoBannerState;
