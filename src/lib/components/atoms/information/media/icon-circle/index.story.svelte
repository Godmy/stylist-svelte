<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import IconCircle from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
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
	component={IconCircle}
	title="IconCircle Component"
	description="A circular icon component with various variants and sizes"
	tags={['information', 'media', 'icon', 'circle']}
>
	{#snippet children(values: any)}
		<IconCircle
			variant={values.variant as 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'}
			size={values.size as 'sm' | 'md' | 'lg'}
		>
			{#snippet icon()}
				*
			{/snippet}
		</IconCircle>
	{/snippet}
</Story>
