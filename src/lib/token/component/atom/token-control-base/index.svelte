<script lang="ts">
	import type { TokenControlBaseProps } from '$stylist/token/type/struct/token-control-base-props';
	import createTokenControlBaseState from '$stylist/token/function/state/token-control-base/index.svelte';

	let props: TokenControlBaseProps = $props();
	const state = createTokenControlBaseState(props);
</script>

<article class={state.cssClass}>
	<header class="token-control-base__header">
		<div class="token-control-base__name-row">
			<svg
				class="token-control-base__icon"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d={state.iconPath} />
			</svg>
			<div class="token-control-base__name">{state.definition.tokenName}</div>
			<sup class="token-control-base__count">{state.tokenCount}</sup>
		</div>
		{#if state.description}
			<p class="token-control-base__description">{state.description}</p>
		{/if}
	</header>
	<div class="token-control-base__body">
		{#if state.children}{@render state.children()}{/if}
	</div>
</article>

<style>
	.token-control-base {
		border: 1px solid var(--md-sys-color-outline-variant, #cac4d0);
		border-radius: 0.75rem;
		background: var(--md-sys-color-surface, #fffbfe);
		padding: var(--spacing-3, 1rem);
		display: grid;
		gap: var(--spacing-2, 0.75rem);
		justify-self: start;
		width: min(100%, 34rem);
		max-width: 100%;
		box-shadow: 0 1px 2px rgba(29, 27, 32, 0.08);
	}

	.token-control-base__header {
		display: grid;
		gap: var(--spacing-1, 0.35rem);
	}

	.token-control-base__name-row {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-1, 0.45rem);
		min-width: 0;
	}

	.token-control-base__icon {
		width: 1rem;
		height: 1rem;
		flex: 0 0 auto;
		color: var(--md-sys-color-on-surface-variant, #49454f);
	}

	.token-control-base__name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: var(--font-size-3, 0.875rem);
		font-weight: var(--font-weight-bold, 700);
		color: var(--md-sys-color-on-surface, #1d1b20);
	}

	.token-control-base__count {
		font-size: 0.75rem;
		line-height: 1;
		font-weight: 700;
		color: var(--md-sys-color-on-secondary-container, #1d192b);
		border: 1px solid var(--md-sys-color-secondary-container, #e8def8);
		border-radius: 999px;
		background: var(--md-sys-color-secondary-container, #e8def8);
		padding: 0.15rem 0.35rem;
	}

	.token-control-base__description {
		margin: 0;
		font-size: var(--font-size-3, 0.875rem);
		color: var(--md-sys-color-on-surface-variant, #49454f);
	}

	.token-control-base__body {
		display: grid;
		gap: var(--spacing-2, 0.75rem);
	}

	.token-control-base--inline {
		grid-template-columns: minmax(9rem, 14rem) minmax(12rem, 1fr);
		align-items: center;
		gap: var(--spacing-3, 1rem);
	}

	.token-control-base--inline .token-control-base__header {
		display: block;
	}

	.token-control-base--inline .token-control-base__body {
		display: block;
	}

	@media (max-width: 640px) {
		.token-control-base--inline {
			grid-template-columns: 1fr;
		}
	}
</style>
