<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import StrikeThrough from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link']
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg']
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'block',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story component={StrikeThrough} {controls}>
	{#snippet children()}
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
