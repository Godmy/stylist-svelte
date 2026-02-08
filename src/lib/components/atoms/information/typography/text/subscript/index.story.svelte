<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Subscript from './index.svelte';

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

<Story component={Subscript} {controls}>
	{#snippet children()}
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
