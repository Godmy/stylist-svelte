<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Paragraph from './index.svelte';

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

<Story component={Paragraph} {controls}>
	{#snippet children()}
		<div class="space-y-4 p-4">
			<h3 class="text-lg font-semibold">Paragraph Variants</h3>

			<div class="flex flex-col space-y-2">
				<Paragraph variant="primary"
					>Primary Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph
				>
				<Paragraph variant="secondary"
					>Secondary Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph
				>
				<Paragraph variant="success"
					>Success Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph
				>
				<Paragraph variant="warning"
					>Warning Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph
				>
				<Paragraph variant="danger"
					>Danger Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</Paragraph
				>
				<Paragraph variant="ghost"
					>Ghost Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</Paragraph
				>
				<Paragraph variant="link"
					>Link Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</Paragraph
				>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Paragraph Sizes</h3>
			<div class="flex flex-col space-y-2">
				<Paragraph size="sm"
					>Small Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph
				>
				<Paragraph size="md"
					>Medium Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph
				>
				<Paragraph size="lg"
					>Large Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph
				>
			</div>

			<h3 class="mt-6 text-lg font-semibold">Paragraph States</h3>
			<div class="flex flex-col space-y-2">
				<Paragraph disabled
					>Disabled Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph
				>
				<Paragraph block
					>Block Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph
				>
			</div>
		</div>
	{/snippet}
</Story>
