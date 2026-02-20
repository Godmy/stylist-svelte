<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Text from './index.svelte';
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
	component={Text}
	title="Text"
	category="Atoms/Information/Typography/Text"
	description="A text component for typography."
	tags={['text', 'typography', 'body', 'content']}
>
	{#snippet children(values: any)}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Text Variants</h3>

			<div class="flex flex-col space-y-2">
				<Text variant="primary">Primary Text</Text>
				<Text variant="secondary">Secondary Text</Text>
				<Text variant="success">Success Text</Text>
				<Text variant="warning">Warning Text</Text>
				<Text variant="danger">Danger Text</Text>
				<Text variant="ghost">Ghost Text</Text>
				<Text variant="link">Link Text</Text>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Text Sizes</h3>
			<div class="flex flex-col space-y-2">
				<Text size="sm">Small Text</Text>
				<Text size="md">Medium Text</Text>
				<Text size="lg">Large Text</Text>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Text States</h3>
			<div class="flex flex-col space-y-2">
				<Text disabled>Disabled Text</Text>
				<Text block>Block Text</Text>
			</div>
		</div>
	{/snippet}
</Story>
