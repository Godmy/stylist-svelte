<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Caption from './index.svelte';

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

<Story component={Caption} {controls}>
	{#snippet children()}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Caption Variants</h3>

			<div class="flex flex-col space-y-2">
				<Caption variant="primary">Primary Caption</Caption>
				<Caption variant="secondary">Secondary Caption</Caption>
				<Caption variant="success">Success Caption</Caption>
				<Caption variant="warning">Warning Caption</Caption>
				<Caption variant="danger">Danger Caption</Caption>
				<Caption variant="ghost">Ghost Caption</Caption>
				<Caption variant="link">Link Caption</Caption>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Caption Sizes</h3>
			<div class="flex flex-col space-y-2">
				<Caption size="sm">Small Caption</Caption>
				<Caption size="md">Medium Caption</Caption>
				<Caption size="lg">Large Caption</Caption>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Caption States</h3>
			<div class="flex flex-col space-y-2">
				<Caption disabled>Disabled Caption</Caption>
				<Caption block>Block Caption</Caption>
			</div>
		</div>
	{/snippet}
</Story>
