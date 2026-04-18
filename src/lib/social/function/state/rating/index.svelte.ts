import type { SlotRating } from '$stylist/social/interface/slot/rating';

export function createRatingState(props: SlotRating & { rating?: number }) {
	let hoverRating = $state(0);
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const readonly = $derived(props.readonly ?? false);

	const rootClasses = $derived(`inline-flex items-center gap-1 ${props.class ?? ''}`.trim());
	const ratingTextClasses = $derived('ml-2 text-sm text-[var(--color-text-secondary)]');

	function handleStarClick(value: number): void {
		if (disabled || readonly) return;
		props.onRatingChange?.(value);
	}

	function handleStarHover(value: number): void {
		if (disabled || readonly) return;
		hoverRating = value;
	}

	function handleMouseLeave(): void {
		hoverRating = 0;
	}

	function starButtonClasses(index: number): string {
		const active = index < (hoverRating || props.rating || 0);
		return `${disabled ? 'cursor-not-allowed opacity-[var(--opacity-50)]' : 'cursor-pointer'} ${active ? 'text-[var(--color-warning-500)]' : 'text-[var(--color-text-tertiary)]'}`;
	}

	function starIconClasses(index: number): string {
		const sizeClass = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
		const active = index < (hoverRating || props.rating || 0);
		return `${sizeClass} ${active ? 'fill-current' : ''}`;
	}

	return {
		get rootClasses() { return rootClasses; },
		get ratingTextClasses() { return ratingTextClasses; },
		handleMouseLeave,
		handleStarClick,
		handleStarHover,
		starButtonClasses,
		starIconClasses
	};
}

export default createRatingState;
