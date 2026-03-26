<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import TokenControlBase from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/interaction/type/token-control-definition';

	const definition: TokenRadioControlDefinition = {
		id: 'token-control-base-spacing',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/spacing',
		tokenName: 'SPACING',
		controlKind: 'radio',
		description: 'Базовые значения отступов',
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
	component={TokenControlBase}
	title="Token Control Base"
	category="Atoms/Interaction/Controls"
	description="Базовый компонент для отображения управления токенами"
	tags={['token', 'control', 'base']}
>
	{#snippet children()}
		<TokenControlBase {definition} layout="inline">
			<div class="flex gap-2">
				{#each definition.options as option}
					<button
						type="button"
						class="px-2 py-1 border rounded-full text-sm"
					>
						{option.label}
					</button>
				{/each}
			</div>
		</TokenControlBase>
	{/snippet}
</Story>
