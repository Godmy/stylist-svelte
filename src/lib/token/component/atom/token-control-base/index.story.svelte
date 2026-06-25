<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import TokenControlBase from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/token/type/struct/radio-control-definition';

	const definition: TokenRadioControlDefinition = {
		id: 'token-control-base-spacing',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/spacing',
		tokenName: 'SPACING',
		controlKind: 'radio',
		description: 'Base spacing values',
		defaultValue: '4px',
		options: [
			{ label: '4px', value: '4px' },
			{ label: '8px', value: '8px' },
			{ label: '12px', value: '12px' },
			{ label: '16px', value: '16px' }
		]
	};
</script>

<Story
	title="Token Control Base"
	category="Atoms/Interaction/Controls"
	description="Base shell for rendering a token control with metadata."
	tags={['token', 'control', 'base']}
>
	{#snippet children()}
		<div class="token-story-panel">
			<TokenControlBase {definition} layout="inline">
				<div class="token-story-options">
					{#each definition.options as option}
						<button type="button" class="token-story-chip">
							{option.label}
						</button>
					{/each}
				</div>
			</TokenControlBase>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-panel {
		display: grid;
		gap: 1rem;
		max-width: 42rem;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 1.25rem;
	}
	.token-story-options {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.token-story-chip {
		border: 1px solid #cbd5e1;
		border-radius: 999px;
		background: #ffffff;
		padding: 0.3rem 0.65rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #334155;
	}
</style>
