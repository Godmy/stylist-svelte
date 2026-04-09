<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Toggle from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'checked', type: 'boolean', defaultValue: true },
		{ name: 'ariaLabel', type: 'text', defaultValue: 'Toggle switch' }
	];
</script>

<Story
	{controls}
	component={Toggle}
	title="Toggle"
	category="Atoms/Interaction/Controls/Toggles"
	description="РџРµСЂРµРєР»СЋС‡Р°С‚РµР»СЊ РІ СЃС‚РёР»Рµ toggle РґР»СЏ РІРєР»СЋС‡РµРЅРёСЏ/РІС‹РєР»СЋС‡РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ"
	tags={['toggle', 'switch', 'checkbox', 'form', 'control']}
>
	{#snippet children(values: any)}
		<Toggle
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			checked={values.checked as boolean}
			ariaLabel={values.ariaLabel as string}
		/>
	{/snippet}
</Story>



