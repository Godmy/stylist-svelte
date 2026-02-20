<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import AnimatedNumber from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'value',
			type: 'text',
			defaultValue: '12345'
		},
		{
			name: 'prefix',
			type: 'text',
			defaultValue: ''
		},
		{
			name: 'suffix',
			type: 'text',
			defaultValue: ''
		},
		{
			name: 'separator',
			type: 'text',
			defaultValue: ','
		},
		{
			name: 'decimals',
			type: 'text',
			defaultValue: '0'
		}
	];
</script>

<Story
	{controls}
	component={AnimatedNumber}
	title="AnimatedNumber Component"
	description="An animated number component for displaying numeric values with animation"
	tags={['information', 'data-display', 'number', 'animation']}
>
	{#snippet children(values: any)}
		<AnimatedNumber
			value={parseInt(values.value as string) || 12345}
			prefix={values.prefix as string}
			suffix={values.suffix as string}
			separator={values.separator as string}
			decimals={parseInt(values.decimals as string) || 0}
		/>
	{/snippet}
</Story>
