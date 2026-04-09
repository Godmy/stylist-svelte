<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Card from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'shape', type: 'select', defaultValue: 'rounded', options: ['rectangular', 'rounded', 'pill'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'elevation', type: 'select', defaultValue: '1', options: ['0', '1', '2', '3', '4', '5', '6'] },
		{ name: 'clickable', type: 'boolean', defaultValue: false },
		{ name: 'fullWidth', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={Card} title="Card" description="Flexible card container with optional media, header, and footer slots." {controls}>
	{#snippet children(values: any)}
		<Card
			shape={values.shape}
			size={values.size}
			elevation={Number(values.elevation)}
			clickable={values.clickable}
			fullWidth={values.fullWidth}
		>
			{#snippet children()}
				<p class="text-sm text-[--color-text-secondary]">Card body content goes here.</p>
			{/snippet}
			{#snippet header()}
				<div class="mb-3">
					<h3 class="font-semibold text-[--color-text-primary]">Card Title</h3>
					<p class="text-xs text-[--color-text-tertiary]">Subtitle or description</p>
				</div>
			{/snippet}
			{#snippet footer()}
				<div class="flex justify-end gap-2">
					<span class="text-xs text-[--color-text-secondary]">Action area</span>
				</div>
			{/snippet}
		</Card>
	{/snippet}
</Story>
