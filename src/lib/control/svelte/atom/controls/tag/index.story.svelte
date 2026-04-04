<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import Tag from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'Label' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'closable', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={Tag}
	title="Tag"
	category="Atoms/Interaction/Controls"
	description="РўРµРі РґР»СЏ РјР°СЂРєРёСЂРѕРІРєРё Рё РєР°С‚РµРіРѕСЂРёР·Р°С†РёРё РєРѕРЅС‚РµРЅС‚Р°"
	tags={['tag', 'label', 'badge', 'marker']}
>
	{#snippet children(values: any)}
		<Tag
			label={values.text as string}
			variant={values.variant as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'}
			size={values.size as 'sm' | 'md' | 'lg'}
			closable={values.closable as boolean}
			disabled={values.disabled as boolean}
		/>
	{/snippet}
</Story>

