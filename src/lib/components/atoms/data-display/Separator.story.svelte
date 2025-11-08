<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import Separator from './Separator.svelte';

	const orientationOptions = ['horizontal', 'vertical'] as const;

	type Props = {
		orientation: (typeof orientationOptions)[number];
		decorative: boolean;
	};

	const controls: ControlConfig[] = [
		{ name: 'orientation', type: 'select', defaultValue: 'horizontal', options: [...orientationOptions] },
		{ name: 'decorative', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="atoms-data-display-separator"
	title="Separator"
	component={Separator}
	category="Atoms"
	description="A visual separator to divide content horizontally or vertically."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="flex flex-col gap-4">
			<h3 class="mb-4 text-lg font-bold">Horizontal Separator</h3>
			<div class="flex items-center gap-4">
				<span>Item 1</span>
				<Separator orientation="horizontal" decorative={props.decorative} class="w-24" />
				<span>Item 2</span>
			</div>

			<h3 class="mt-8 mb-4 text-lg font-bold">Vertical Separator</h3>
			<div class="flex h-24 items-center gap-4">
				<span>Item A</span>
				<Separator orientation="vertical" decorative={props.decorative} />
				<span>Item B</span>
			</div>
		</div>
	{/snippet}
</Story>
