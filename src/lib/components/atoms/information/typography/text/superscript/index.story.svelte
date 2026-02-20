<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Superscript from './index.svelte';
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
	component={Superscript}
	title="Superscript"
	category="Atoms/Information/Typography/Text"
	description="A superscript text component for typography."
	tags={['superscript', 'typography', 'text', 'footnote']}
>
	{#snippet children(values: any)}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Superscript Text Variants</h3>

			<div class="flex flex-col space-y-2">
				<Superscript variant="primary">Primary Superscript Text</Superscript>
				<Superscript variant="secondary">Secondary Superscript Text</Superscript>
				<Superscript variant="success">Success Superscript Text</Superscript>
				<Superscript variant="warning">Warning Superscript Text</Superscript>
				<Superscript variant="danger">Danger Superscript Text</Superscript>
				<Superscript variant="ghost">Ghost Superscript Text</Superscript>
				<Superscript variant="link">Link Superscript Text</Superscript>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Superscript Text Sizes</h3>
			<div class="flex flex-col space-y-2">
				<Superscript size="sm">Small Superscript Text</Superscript>
				<Superscript size="md">Medium Superscript Text</Superscript>
				<Superscript size="lg">Large Superscript Text</Superscript>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Superscript Text States</h3>
			<div class="flex flex-col space-y-2">
				<Superscript disabled>Disabled Superscript Text</Superscript>
				<Superscript block>Block Superscript Text</Superscript>
			</div>
		</div>
	{/snippet}
</Story>
