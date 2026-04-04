<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import PageButton from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'page', type: 'number', defaultValue: 1, min: 1 },
		{ name: 'isActive', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'variant', type: 'select', defaultValue: 'outline', options: ['primary','secondary','success','warning','danger','outline','ghost','link'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story
	{controls}
	component={PageButton}
	title="PageButton"
	category="Atoms/Interaction/Controls/Buttons"
	description="Pagination page button"
>
	{#snippet children(values: any)}
		<PageButton
			page={Number(values.page) || 1}
			isActive={values.isActive as boolean}
			disabled={values.disabled as boolean}
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
		/>
	{/snippet}
</Story>



