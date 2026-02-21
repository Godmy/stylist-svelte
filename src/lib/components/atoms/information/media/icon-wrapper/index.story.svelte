<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import IconWrapper from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg']
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
		},
		{
			name: 'shape',
			type: 'select',
			defaultValue: 'circle',
			options: ['circle', 'square', 'rounded']
		},
		{
			name: 'color',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		}
	];
</script>

<Story
	{controls}
	component={IconWrapper}
	title="IconWrapper Component"
	description="A wrapper component for icons with style variants"
	tags={['information', 'media', 'icon', 'wrapper']}
>
	{#snippet children(values: any)}
		<IconWrapper
			size={values.size as 'sm' | 'md' | 'lg'}
			variant={values.variant as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}
			shape={values.shape as 'circle' | 'square' | 'rounded'}
			color={values.color as 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}
		>
			{#snippet content()}
				*
			{/snippet}
		</IconWrapper>
	{/snippet}
</Story>
