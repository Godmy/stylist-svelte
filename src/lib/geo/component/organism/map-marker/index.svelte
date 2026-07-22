<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import { createMapMarkerState } from '$stylist/geo/function/state/map-marker/index.svelte';

	let props = $props();
	const state = createMapMarkerState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	<div
		class={state.markerContainerClasses}
		onclick={state.handleClick}
		role="button"
		tabindex={0}
		onkeydown={(e: KeyboardEvent) => state.handleKeyDown(e, state.handleClick)}
	>
		{#if state.pinStyle === 'vector'}
			<BaseIcon name="map-pin" class={state.pinStyleClasses} style={`color: ${state.colorClass}`} />
		{:else if state.pinStyle === 'flag'}
			<div class={state.pinStyleClasses}>
				<div class={state.flagClasses} style={`background-color: ${state.colorClass}`}></div>
				<div class={state.flagTopClasses} style={`background-color: ${state.colorClass}`}></div>
			</div>
		{:else}
			<div class={state.pinStyleClasses} style={`background-color: ${state.colorClass}`}>
				<BaseIcon name={state.CategoryIcon} class="c-map-marker__pin-icon" />
			</div>
		{/if}

		{#if state.distance}
			<div class={state.distanceLabelClasses}>{state.distance}</div>
		{/if}
	</div>

	{#if state.isPopupOpen}
		<div class={state.popupClasses}>
			<div class="c-map-marker__popup-head">
				<div>
					{#if state.title}
						<h3 class={state.titleClasses}>{state.title}</h3>
					{/if}
					{#if state.description}
						<p class={state.descriptionClasses}>{state.description}</p>
					{/if}
					{#if state.rating !== undefined}
						<div class={state.ratingContainerClasses}>
							{#each Array(5) as _, i}
								<BaseIcon name="star" class={state.getStarClasses(i < Math.floor(state.rating))} />
							{/each}
							<span class="c-map-marker__rating-value">{state.rating.toFixed(1)}</span>
						</div>
					{/if}
				</div>
				<button
					class={state.closeButtonClasses}
					onclick={() => (state.isPopupOpen = false)}
					aria-label="Close popup"
				>
					<svg
						class="c-map-marker__close-icon"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			{#if state.contactInfo}
				<div class={state.contactInfoContainerClasses}>
					{#if state.contactInfo.phone}
						<div class={state.contactItemClasses}>
							<BaseIcon name="phone" class="c-map-marker__contact-icon" />
							<a href={`tel:${state.contactInfo.phone}`} class={state.contactLinkClasses}>
								{state.contactInfo.phone}
							</a>
						</div>
					{/if}
					{#if state.contactInfo.email}
						<div class={state.contactItemClasses}>
							<BaseIcon name="mail" class="c-map-marker__contact-icon" />
							<a
								href={`mailto:${state.contactInfo.email}`}
								class={state.contactLinkClasses}
								target="_blank"
							>
								{state.contactInfo.email}
							</a>
						</div>
					{/if}
					{#if state.contactInfo.hours}
						<div class={state.contactItemClasses}>
							<BaseIcon name="clock" class="c-map-marker__contact-icon" />
							<span>{state.contactInfo.hours}</span>
						</div>
					{/if}
				</div>
			{/if}

			{#if props.snippet}
				<div class={state.customContentClasses}>{@render props.snippet()}</div>
			{/if}

			{#if props.popupContent}
				<div class="c-map-marker__popup-extra">{@render props.popupContent()}</div>
			{/if}

			<div class={state.actionButtonsContainerClasses}>
				<Button variant="outline" size="sm" onclick={state.handleNavigateClick}>
					<BaseIcon name="navigation" class="c-map-marker__btn-icon" />
					Directions
				</Button>
				<Button variant="outline" size="sm" onclick={state.handleInfoClick}>
					<BaseIcon name="info" class="c-map-marker__btn-icon" />
					Details
				</Button>
			</div>
		</div>
	{/if}
</div>

<style>
	.c-map-marker {
		position: relative;
	}

	.c-map-marker--selected {
		z-index: var(--z-index-docked, 10);
	}

	.c-map-marker:not(.c-map-marker--selected) {
		z-index: var(--z-index-base, 0);
	}

	.c-map-marker__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}

	/* Pin sizes */
	.c-map-marker__pin {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform var(--duration-200, 200ms) ease;
	}
	.c-map-marker__pin--xs {
		width: 0.75rem;
		height: 0.75rem;
	}
	.c-map-marker__pin--sm {
		width: 1rem;
		height: 1rem;
	}
	.c-map-marker__pin--md {
		width: 1.5rem;
		height: 1.5rem;
	}
	.c-map-marker__pin--lg {
		width: 2rem;
		height: 2rem;
	}
	.c-map-marker__pin--xl {
		width: 2.5rem;
		height: 2.5rem;
	}
	.c-map-marker__pin--2xl {
		width: 3rem;
		height: 3rem;
	}
	.c-map-marker__pin--selected {
		transform: scale(1.25);
	}

	/* Pin styles */
	.c-map-marker__pin--circle {
		border-radius: 9999px;
		border: 2px solid var(--color-border-primary);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
	}

	.c-map-marker__pin--diamond {
		transform: rotate(45deg);
		border-radius: 0 0 50% 50%;
	}

	.c-map-marker__pin--diamond.c-map-marker__pin--selected {
		transform: rotate(45deg) scale(1.25);
	}

	.c-map-marker__pin-icon {
		width: 60%;
		height: 60%;
	}

	/* Flag */
	.c-map-marker__flag-pole {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 2px;
	}

	.c-map-marker__flag-pole--xs {
		height: 66%;
	}
	.c-map-marker__flag-pole--sm,
	.c-map-marker__flag-pole--md,
	.c-map-marker__flag-pole--lg {
		height: 75%;
	}
	.c-map-marker__flag-pole--xl {
		height: 80%;
	}
	.c-map-marker__flag-pole--2xl {
		height: 83%;
	}

	.c-map-marker__flag-top {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-100%);
		border-radius: 9999px;
	}

	.c-map-marker__flag-top--xs {
		width: 0.75rem;
		height: 0.75rem;
	}
	.c-map-marker__flag-top--sm,
	.c-map-marker__flag-top--md,
	.c-map-marker__flag-top--lg {
		width: 1rem;
		height: 1rem;
	}
	.c-map-marker__flag-top--xl {
		width: 1.25rem;
		height: 1.25rem;
	}
	.c-map-marker__flag-top--2xl {
		width: 1.5rem;
		height: 1.5rem;
	}

	/* Distance */
	.c-map-marker__distance {
		font-size: 0.75rem;
		background: var(--color-background-primary);
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		margin-top: 0.25rem;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
		color: var(--color-text-primary);
	}

	/* Popup */
	.c-map-marker__popup {
		position: absolute;
		z-index: var(--z-index-popover, 1500);
		margin-top: 0.5rem;
		width: 16rem;
		background: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
		border: 1px solid var(--color-border-primary);
		padding: 1rem;
	}

	.c-map-marker__popup-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.c-map-marker__popup-title {
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.c-map-marker__popup-description {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-top: 0.25rem;
	}

	.c-map-marker__rating {
		display: flex;
		align-items: center;
		margin-top: 0.5rem;
		gap: 0.125rem;
	}

	.c-map-marker__rating-value {
		margin-left: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-map-marker__star {
		width: 1rem;
		height: 1rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-map-marker__star--filled {
		color: var(--color-warning-500, #f59e0b);
		fill: currentColor;
	}

	.c-map-marker__close {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		color: var(--color-text-secondary);
	}

	.c-map-marker__close:hover {
		color: var(--color-text-primary);
	}

	.c-map-marker__close-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	.c-map-marker__contact {
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--color-border-secondary);
	}

	.c-map-marker__contact-item {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-top: 0.5rem;
	}

	.c-map-marker__contact-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
		flex-shrink: 0;
	}

	.c-map-marker__contact-link:hover {
		color: var(--color-primary-600);
	}

	.c-map-marker__custom,
	.c-map-marker__popup-extra {
		margin-top: 0.75rem;
	}

	.c-map-marker__actions {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.c-map-marker__btn-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.25rem;
	}
</style>
