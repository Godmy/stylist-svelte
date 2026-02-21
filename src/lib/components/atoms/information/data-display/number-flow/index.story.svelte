<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import NumberFlow from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'value',
			type: 'text',
			defaultValue: '12345.67'
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
			name: 'locales',
			type: 'text',
			defaultValue: 'en-US'
		}
	];
</script>

<Story
	{controls}
	component={NumberFlow}
	title="NumberFlow Component"
	description="A number flow component for displaying formatted numbers"
	tags={['information', 'data-display', 'number', 'flow']}
>
	{#snippet children(values: any)}
		{@const parsedValue = Number(values.value)}
		<NumberFlow
			value={Number.isNaN(parsedValue) ? 12345.67 : parsedValue}
			prefix={values.prefix as string}
			suffix={values.suffix as string}
			locales={values.locales as string}
		/>
	{/snippet}
</Story>
