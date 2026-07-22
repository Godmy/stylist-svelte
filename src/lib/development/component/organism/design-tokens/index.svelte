<script lang="ts">
	import type { RecipeDesignTokens } from '$stylist/development/interface/recipe/design-tokens';
	import { createDesignTokensState } from '$stylist/development/function/state/design-tokens/index.svelte';

	let { ...props }: RecipeDesignTokens = $props();
	const state = createDesignTokensState(props);
</script>

<div class={state.containerClass}>
	{#if state.showTokens}
		<h2 class={state.sectionTitleClass}>Design Tokens</h2>

		{#if state.showColorPalette}
			<section class={state.sectionContainerClass}>
				<h3 class={state.sectionTitleClass}>Color Palette</h3>
				<div class={state.tokensGridClass}>
					{#each Object.entries(state.currentTheme.colors) as [tokenName, tokenValue]}
						{#if state.isColorToken(tokenName)}
							<div class={state.tokenCardClass}>
								<div
									class={state.getColorPreviewClass(String(tokenValue))}
									style="background-color: {tokenValue}"
								></div>
								<span class={state.tokenNameClass}>{tokenName}</span>
								<span class={state.tokenValueClass}>{tokenValue}</span>
							</div>
						{/if}
					{/each}
				</div>
			</section>
		{/if}

		{#if state.showSpacing}
			<section class={state.sectionContainerClass}>
				<h3 class={state.sectionTitleClass}>Spacing</h3>
				<div class="dt-token-row">
					{#each Object.entries(state.layoutTokens.spacing ?? {}) as [tokenName, tokenValue]}
						<div class={state.tokenCardClass}>
							<div
								class={state.previewCellClass}
								style="width: {tokenValue}; height: {tokenValue}"
							></div>
							<span class="dt-mono-sm">{tokenName}</span>
							<span class="dt-text-sm">{tokenValue}</span>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		{#if state.showTypography}
			<section class={state.sectionContainerClass}>
				<h3 class={state.sectionTitleClass}>Typography</h3>
				<div class="dt-section-list">
					{#each Object.entries(state.currentTheme.typography.fontSize) as [tokenName, tokenValue]}
						<div class={state.tokenCardClass}>
							<span class="dt-mono-md">{tokenName}</span>
							<span style="font-size: {tokenValue}">Aa Bb Cc</span>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		{#if state.showBorderRadius}
			<section class={state.sectionContainerClass}>
				<h3 class={state.sectionTitleClass}>Border Radius</h3>
				<div class="dt-token-row dt-token-row--end">
					{#each Object.entries(state.layoutTokens.borderRadius ?? {}) as [tokenName, tokenValue]}
						<div class={state.tokenCardClass}>
							<div
								class={state.previewCellClass}
								style="width: var(--border-radius-full); height: var(--spacing-16); border-radius: {tokenValue}"
							></div>
							<span class="dt-mono-sm dt-mono-sm--mt">{tokenName}</span>
							<span class="dt-text-sm">{tokenValue}</span>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		{#if state.showShadows}
			<section class={state.sectionContainerClass}>
				<h3 class={state.sectionTitleClass}>Shadows</h3>
				<div class="dt-shadow-grid">
					{#each Object.entries(state.layoutTokens.boxShadow ?? {}) as [tokenName, tokenValue]}
						{#if tokenValue !== 'none'}
							<div
								class={state.tokenCardClass}
								style={`box-shadow: var(--shadow-${tokenName}, ${tokenValue})`}
							>
								<div class="dt-shadow-name">{tokenName}</div>
								<div class="dt-mono-sm">{tokenValue}</div>
							</div>
						{/if}
					{/each}
				</div>
			</section>
		{/if}
	{/if}

	{#if !state.showTokens}
		<p class="dt-hidden-msg">Design tokens are hidden.</p>
	{/if}
</div>

<style>
	.dt-container {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
	}
	.dt-header {
		margin-bottom: 1.5rem;
	}
	.dt-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}
	.dt-description {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
	.dt-section {
		margin-bottom: 2rem;
	}
	.dt-section-title {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.dt-tokens-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.dt-tokens-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1024px) {
		.dt-tokens-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.dt-token-card {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		padding: 1rem;
		transition: box-shadow var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.dt-token-card:hover {
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
	.dt-token-preview,
	.dt-color-preview {
		height: 4rem;
		margin-bottom: 0.75rem;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
	}
	.dt-preview-cell {
		width: 6rem;
	}
	.dt-token-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.dt-token-value {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		font-family: monospace;
		color: var(--color-text-secondary);
	}
	.dt-token-category {
		display: inline-block;
		margin-top: 0.5rem;
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}
	.dt-token-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.dt-token-row--end {
		align-items: flex-end;
		gap: 1rem;
	}
	.dt-section-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.dt-shadow-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.dt-shadow-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1024px) {
		.dt-shadow-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.dt-mono-sm {
		font-family: monospace;
		font-size: 0.75rem;
	}
	.dt-mono-sm--mt {
		margin-top: 0.5rem;
	}
	.dt-text-sm {
		font-size: 0.75rem;
	}
	.dt-mono-md {
		font-family: monospace;
		font-size: 0.875rem;
	}
	.dt-shadow-name {
		margin-bottom: 0.5rem;
		font-family: monospace;
		font-size: 0.875rem;
	}
	.dt-hidden-msg {
		color: var(--color-text-secondary);
	}
</style>
