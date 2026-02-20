<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import IconChevron from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'isOpen',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg']
		}
	];
</script>

<Story
	{controls}
	component={IconChevron}
	title="IconChevron Component"
	description="A chevron icon component that indicates open/close state"
	tags={['information', 'media', 'icon', 'chevron']}
>
	{#snippet children(values: any)}
		<IconChevron
			isOpen={values.isOpen as boolean}
			size={values.size as 'sm' | 'md' | 'lg'}
		/>
	{/snippet}
</Story>
