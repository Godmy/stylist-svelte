<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import Subscript from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'content', type: 'text', defaultValue: 'H2O' },
		{ name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'primary' },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: false }
	];
</script>

<Story {controls} component={Subscript} title="Subscript" category="Atoms/Information/Typography/Text" description="Subscript typography component">
	{#snippet children(values: any)}
		<Subscript variant={values.variant as any} size={values.size as 'sm' | 'md' | 'lg'} disabled={values.disabled as boolean} block={values.block as boolean}>
			{values.content as string}
		</Subscript>
	{/snippet}
</Story>



