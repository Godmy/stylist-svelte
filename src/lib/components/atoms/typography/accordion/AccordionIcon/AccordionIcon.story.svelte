<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import AccordionIcon from './AccordionIcon.svelte';

	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type AccordionIconStoryProps = {
		isOpen: boolean;
		size: (typeof sizeOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'isOpen', type: 'boolean', defaultValue: false },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] }
	];
</script>

<Story
	id="atoms-navigation-accordion-icon"
	title="AccordionIcon"
	component={AccordionIcon}
	category="Atoms/Typography"
	description="An icon that rotates to indicate the open/closed state of an accordion item."
	tags={['icon', 'accordion', 'navigation']}
	controls={controls}
>
	{#snippet children(props: AccordionIconStoryProps)}
		<div class="flex items-center space-x-4">
			<AccordionIcon isOpen={props.isOpen} size={props.size} />
			<span class="text-gray-700">{props.isOpen ? 'Open' : 'Closed'}</span>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Demonstration of states</h3>
		<div class="flex items-center gap-4">
			<div class="flex flex-col items-center">
				<AccordionIcon isOpen={false} size="lg" />
				<span class="text-sm text-gray-600">Closed (lg)</span>
			</div>
			<div class="flex flex-col items-center">
				<AccordionIcon isOpen={true} size="lg" />
				<span class="text-sm text-gray-600">Open (lg)</span>
			</div>
		</div>
	{/snippet}
</Story>
