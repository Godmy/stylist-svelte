<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Strong from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const controls = [
		{
			name: 'variant',
			type: CONTROL_TYPES.SELECT,
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'],
			defaultValue: 'primary'
		},
		{
			name: 'size',
			type: CONTROL_TYPES.SELECT,
			options: ['sm', 'md', 'lg'],
			defaultValue: 'md'
		},
		{
			name: 'disabled',
			type: CONTROL_TYPES.BOOLEAN,
			defaultValue: false
		},
		{
			name: 'block',
			type: CONTROL_TYPES.BOOLEAN,
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={Strong}
	title="Strong"
	category="Atoms/Information/Typography/Text"
	description="A strong text component for typography."
	tags={['strong', 'typography', 'text', 'bold']}
>
	{#snippet children(values: any)}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Strong Text Variants</h3>

			<div class="flex flex-col space-y-2">
				<Strong variant="primary">Primary Strong Text</Strong>
				<Strong variant="secondary">Secondary Strong Text</Strong>
				<Strong variant="success">Success Strong Text</Strong>
				<Strong variant="warning">Warning Strong Text</Strong>
				<Strong variant="danger">Danger Strong Text</Strong>
				<Strong variant="ghost">Ghost Strong Text</Strong>
				<Strong variant="link">Link Strong Text</Strong>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Strong Text Sizes</h3>
			<div class="flex flex-col space-y-2">
				<Strong size="sm">Small Strong Text</Strong>
				<Strong size="md">Medium Strong Text</Strong>
				<Strong size="lg">Large Strong Text</Strong>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Strong Text States</h3>
			<div class="flex flex-col space-y-2">
				<Strong disabled>Disabled Strong Text</Strong>
				<Strong block>Block Strong Text</Strong>
			</div>
		</div>
	{/snippet}
</Story>
