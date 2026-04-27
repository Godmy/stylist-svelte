<script lang="ts">
	import type { TokenControlBaseProps } from '$stylist/control/type/struct/token-control-base-props';
	import { createTokenControlBaseState } from '$stylist/control/function/state/token-control-base';

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
		{#if state.children}{#if state.children}{@render state.children()}{/if}{/if}
	</div>
</article>

<style>
	.token-control-base {
		border: 1px solid var(--line);
		border-radius: var(--border-radius-xl);
		background: color-mix(in srgb, var(--surface) 93%, var(--bg) 7%);
		padding: var(--spacing-3);
		display: grid;
		gap: var(--spacing-2);
		justify-self: start;
		width: fit-content;
		max-width: 100%;
	}

	.token-control-base__header {
		display: grid;
		gap: var(--spacing-1);
	}

	.token-control-base__name-row {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-1);
	}

	.token-control-base__icon {
		width: var(--size-0_86rem);
		height: var(--size-0_86rem);
		flex: 0 0 auto;
		color: var(--muted);
	}

	.token-control-base__name {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
		color: var(--text);
	}

	.token-control-base__count {
		font-size: var(--font-size-3);
		line-height: var(--line-height-none);
		font-weight: var(--font-weight-bold);
		color: var(--muted);
		border: 1px solid color-mix(in srgb, var(--line) 78%, transparent 22%);
		border-radius: var(--border-radius-full);
		padding: var(--spacing-1) var(--spacing-1);
		transform: translateY(-0.22rem);
	}

	.token-control-base__description {
		margin: 0;
		font-size: var(--font-size-3);
		color: var(--muted);
	}

	.token-control-base__body {
		display: grid;
		gap: var(--spacing-2);
	}

	.token-control-base--inline {
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--spacing-2);
	}

	.token-control-base--inline .token-control-base__header {
		display: block;
	}

	.token-control-base--inline .token-control-base__body {
		display: block;
	}
</style>
