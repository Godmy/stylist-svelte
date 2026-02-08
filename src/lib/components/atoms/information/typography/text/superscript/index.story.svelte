<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Superscript from './index.svelte';

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

<Story component={Superscript} {controls}>
	{#snippet children()}
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
