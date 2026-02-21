<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import IconCircle from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg']
		},
		{
			name: 'filled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={IconCircle}
	title="IconCircle Component"
	description="A circular icon component with variants and sizes"
	tags={['information', 'media', 'icon', 'circle']}
>
	{#snippet children(values: any)}
		<div class="rounded border border-slate-200 bg-slate-50 p-4">
			<IconCircle
				variant={values.variant as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}
				size={values.size as 'sm' | 'md' | 'lg'}
				filled={values.filled as boolean}
			>
				{#snippet icon()}
					*
				{/snippet}
			</IconCircle>
		</div>
	{/snippet}
</Story>
