<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Subscript from './index.svelte';
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
	component={Subscript}
	title="Subscript"
	category="Atoms/Information/Typography/Text"
	description="A subscript text component for typography."
	tags={['subscript', 'typography', 'text', 'chemical']}
>
	{#snippet children(values: any)}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Subscript Text Variants</h3>

			<div class="flex flex-col space-y-2">
				<Subscript variant="primary">Primary Subscript Text</Subscript>
				<Subscript variant="secondary">Secondary Subscript Text</Subscript>
				<Subscript variant="success">Success Subscript Text</Subscript>
				<Subscript variant="warning">Warning Subscript Text</Subscript>
				<Subscript variant="danger">Danger Subscript Text</Subscript>
				<Subscript variant="ghost">Ghost Subscript Text</Subscript>
				<Subscript variant="link">Link Subscript Text</Subscript>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Subscript Text Sizes</h3>
			<div class="flex flex-col space-y-2">
				<Subscript size="sm">Small Subscript Text</Subscript>
				<Subscript size="md">Medium Subscript Text</Subscript>
				<Subscript size="lg">Large Subscript Text</Subscript>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Subscript Text States</h3>
			<div class="flex flex-col space-y-2">
				<Subscript disabled>Disabled Subscript Text</Subscript>
				<Subscript block>Block Subscript Text</Subscript>
			</div>
		</div>
	{/snippet}
</Story>
