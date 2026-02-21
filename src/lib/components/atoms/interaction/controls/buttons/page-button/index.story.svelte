<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PageButton from './index.svelte';

	const controls: ControlConfig[] = [
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
