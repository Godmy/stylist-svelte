<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import StrikeThrough from './index.svelte';
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
	component={StrikeThrough}
	title="StrikeThrough"
	category="Atoms/Information/Typography/Text"
	description="A strike through text component for typography."
	tags={['strike-through', 'typography', 'text', 'deleted']}
>
	{#snippet children(values: any)}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Strike Through Text Variants</h3>

			<div class="flex flex-col space-y-2">
				<StrikeThrough variant="primary">Primary Strike Through Text</StrikeThrough>
				<StrikeThrough variant="secondary">Secondary Strike Through Text</StrikeThrough>
				<StrikeThrough variant="success">Success Strike Through Text</StrikeThrough>
				<StrikeThrough variant="warning">Warning Strike Through Text</StrikeThrough>
				<StrikeThrough variant="danger">Danger Strike Through Text</StrikeThrough>
				<StrikeThrough variant="ghost">Ghost Strike Through Text</StrikeThrough>
				<StrikeThrough variant="link">Link Strike Through Text</StrikeThrough>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Strike Through Text Sizes</h3>
			<div class="flex flex-col space-y-2">
				<StrikeThrough size="sm">Small Strike Through Text</StrikeThrough>
				<StrikeThrough size="md">Medium Strike Through Text</StrikeThrough>
				<StrikeThrough size="lg">Large Strike Through Text</StrikeThrough>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Strike Through Text States</h3>
			<div class="flex flex-col space-y-2">
				<StrikeThrough disabled>Disabled Strike Through Text</StrikeThrough>
				<StrikeThrough block>Block Strike Through Text</StrikeThrough>
			</div>
		</div>
	{/snippet}
</Story>
