<script lang="ts">
	import type { TokenControlDefinition } from '$stylist/control/type/struct/token-control-definition';
	import type { TokenControlBaseProps } from '$stylist/control/type/struct/token-control-base-props';
	import { TOKEN_ICON_PATHS } from '$stylist/control/const/map/token-icon-paths';
	import { getTokenIconKind } from '$stylist/control/function/script/get-token-icon-kind';

	let { definition, layout = 'stack', class: className = '', children }: TokenControlBaseProps = $props();

	const tokenCount = $derived.by(() => {
		if (definition.controlKind === 'range') {
			const step = definition.step ?? 1;
			if (step <= 0) return 0;
			return Math.floor((definition.max - definition.min) / step) + 1;
		}
		if (definition.controlKind === 'text') {
			return 1;
		}
		return definition.options.length;
	});

	const iconPath = $derived(TOKEN_ICON_PATHS[getTokenIconKind(definition.tokenName)]);
</script>

<article class={`token-control-base token-control-base--${layout} ${className}`.trim()}>
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
				<path d={iconPath} />
			</svg>
			<div class="token-control-base__name">{definition.tokenName}</div>
			<sup class="token-control-base__count">{tokenCount}</sup>
		</div>
		{#if definition.description}
			<p class="token-control-base__description">{definition.description}</p>
		{/if}
	</header>
	<div class="token-control-base__body">
		{@render children?.()}
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
