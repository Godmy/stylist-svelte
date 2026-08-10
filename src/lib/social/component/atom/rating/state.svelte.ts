import type { SlotRating } from '$stylist/social/interface/slot/rating';

export function createRatingState(props: SlotRating & { rating?: number }) {
	let hoverRating = $state(0);
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const readonly = $derived(props.readonly ?? false);

	const rootClasses = $derived(`c-rating ${props.class ?? ''}`.trim());
	const ratingTextClasses = $derived(
		`c-rating__text ${disabled ? 'c-rating__text--disabled' : ''}`.trim()
	);

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
		return [
			'c-rating__star-btn',
			active ? 'c-rating__star-btn--filled' : '',
			readonly ? 'c-rating__star-btn--readonly' : '',
			disabled ? 'c-rating__star-btn--disabled' : ''
		]
			.filter(Boolean)
			.join(' ');
	}

	function starIconClasses(index: number): string {
		const active = index < (hoverRating || props.rating || 0);
		return [
			'c-rating__star-icon',
			`c-rating__star-icon--${size}`,
			active ? 'c-rating__star-icon--filled' : ''
		]
			.filter(Boolean)
			.join(' ');
	}

	return {
		get rootClasses() {
			return rootClasses;
		},
		get ratingTextClasses() {
			return ratingTextClasses;
		},
		handleMouseLeave,
		handleStarClick,
		handleStarHover,
		starButtonClasses,
		starIconClasses
	};
}

export default createRatingState;
