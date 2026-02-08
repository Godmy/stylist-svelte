<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import SectionHeading from './index.svelte';

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

<Story component={SectionHeading} {controls}>
	{#snippet children()}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Section Heading Variants</h3>

			<div class="flex flex-col space-y-2">
				<SectionHeading variant="primary">Primary Section Heading</SectionHeading>
				<SectionHeading variant="secondary">Secondary Section Heading</SectionHeading>
				<SectionHeading variant="success">Success Section Heading</SectionHeading>
				<SectionHeading variant="warning">Warning Section Heading</SectionHeading>
				<SectionHeading variant="danger">Danger Section Heading</SectionHeading>
				<SectionHeading variant="ghost">Ghost Section Heading</SectionHeading>
				<SectionHeading variant="link">Link Section Heading</SectionHeading>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Section Heading Sizes</h3>
			<div class="flex flex-col space-y-2">
				<SectionHeading size="sm">Small Section Heading</SectionHeading>
				<SectionHeading size="md">Medium Section Heading</SectionHeading>
				<SectionHeading size="lg">Large Section Heading</SectionHeading>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Section Heading States</h3>
			<div class="flex flex-col space-y-2">
				<SectionHeading disabled>Disabled Section Heading</SectionHeading>
				<SectionHeading block>Block Section Heading</SectionHeading>
			</div>
		</div>
	{/snippet}
</Story>
