<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Small from './index.svelte';
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
	component={Small}
	title="Small"
	category="Atoms/Information/Typography/Text"
	description="A small text component for typography."
	tags={['small', 'typography', 'text', 'fine-print']}
>
	{#snippet children(values: any)}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Small Text Variants</h3>

			<div class="flex flex-col space-y-2">
				<Small variant="primary">Primary Small Text</Small>
				<Small variant="secondary">Secondary Small Text</Small>
				<Small variant="success">Success Small Text</Small>
				<Small variant="warning">Warning Small Text</Small>
				<Small variant="danger">Danger Small Text</Small>
				<Small variant="ghost">Ghost Small Text</Small>
				<Small variant="link">Link Small Text</Small>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Small Text Sizes</h3>
			<div class="flex flex-col space-y-2">
				<Small size="sm">Small Small Text</Small>
				<Small size="md">Medium Small Text</Small>
				<Small size="lg">Large Small Text</Small>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Small Text States</h3>
			<div class="flex flex-col space-y-2">
				<Small disabled>Disabled Small Text</Small>
				<Small block>Block Small Text</Small>
			</div>
		</div>
	{/snippet}
</Story>
