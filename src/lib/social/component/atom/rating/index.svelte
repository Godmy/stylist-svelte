<script lang="ts">
	import type { SlotRating as IRatingProps } from '$stylist/social/interface/slot/rating';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
	import createRatingState from '$stylist/social/function/state/rating/index.svelte';

	let {
		rating = $bindable(0),
		max = 5,
		readonly = false,
		disabled = false,
		size = 'md',
		class: className = '',
		onRatingChange,
		...restProps
	}: IRatingProps & { rating?: number } = $props();

	const state = createRatingState({
		rating,
		max,
		readonly,
		disabled,
		size,
		class: className,
		onRatingChange
	});
</script>

<div
	class={state.rootClasses}
	class:c-rating--readonly={readonly || disabled}
	onmouseleave={state.handleMouseLeave}
	{...restProps}
>
	{#each Array(max) as _, i}
		<button
			type="button"
			class={state.starButtonClasses(i)}
			onclick={() => state.handleStarClick(i + 1)}
			onmouseenter={() => state.handleStarHover(i + 1)}
			onfocus={() => state.handleStarHover(i + 1)}
			{disabled}
			aria-label={`Рейтинг ${i + 1} из ${max}`}
			aria-pressed={i < rating}
		>
			<BaseIcon
				name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'star') ?? 'star'}
				class={state.starIconClasses(i)}
			/>
		</button>
	{/each}

	<span class={state.ratingTextClasses}>
		{rating.toFixed(1)} из {max}
	</span>
</div>

<style>
	.c-rating {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.c-rating--readonly {
		cursor: default;
	}

	.c-rating__star-btn {
		padding: 0.125rem;
		border-radius: 9999px;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-neutral-300, var(--color-border-primary));
		transition: color var(--duration-120, 120ms) ease;
	}

	.c-rating__star-btn--filled {
		color: var(--color-warning-400, #fbbf24);
	}
	.c-rating__star-btn--readonly,
	.c-rating__star-btn--disabled {
		cursor: default;
	}
	.c-rating__star-btn--disabled {
		opacity: 0.5;
	}

	.c-rating__star-btn:not(.c-rating__star-btn--readonly):not(.c-rating__star-btn--disabled):hover {
		color: var(--color-warning-500, #f59e0b);
	}

	.c-rating__star-icon {
		display: block;
	}
	.c-rating__star-icon--xs {
		width: 0.75rem;
		height: 0.75rem;
	}
	.c-rating__star-icon--sm {
		width: 1rem;
		height: 1rem;
	}
	.c-rating__star-icon--md {
		width: 1.25rem;
		height: 1.25rem;
	}
	.c-rating__star-icon--lg {
		width: 1.5rem;
		height: 1.5rem;
	}
	.c-rating__star-icon--xl {
		width: 2rem;
		height: 2rem;
	}
	.c-rating__star-icon--2xl {
		width: 2.5rem;
		height: 2.5rem;
	}
	.c-rating__star-icon--filled {
		fill: currentColor;
		stroke-width: 0;
	}
	.c-rating__star-icon:not(.c-rating__star-icon--filled) {
		fill: transparent;
		stroke: currentColor;
		stroke-width: 1.5;
	}

	.c-rating__text {
		margin-left: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
	.c-rating__text--disabled {
		color: var(--color-neutral-400, var(--color-text-secondary));
	}
</style>
