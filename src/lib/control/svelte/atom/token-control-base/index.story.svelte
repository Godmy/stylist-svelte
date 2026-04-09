<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import TokenControlBase from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/control/type/struct/radio-control-definition';

	const definition: TokenRadioControlDefinition = {
		id: 'token-control-base-spacing',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/spacing',
		tokenName: 'SPACING',
		controlKind: 'radio',
		description: 'Р‘Р°Р·РѕРІС‹Рµ Р·РЅР°С‡РµРЅРёСЏ РѕС‚СЃС‚СѓРїРѕРІ',
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
	description="Р‘Р°Р·РѕРІС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ СѓРїСЂР°РІР»РµРЅРёСЏ С‚РѕРєРµРЅР°РјРё"
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
