<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import Stack from './Stack.svelte';

	const directionOptions = ['vertical', 'horizontal'] as const;
	const alignOptions = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
	const justifyOptions = ['start', 'center', 'end', 'between', 'around'] as const;

	type Props = {
		direction: (typeof directionOptions)[number];
		spacing: string;
		align: (typeof alignOptions)[number];
		justify: (typeof justifyOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'direction', type: 'select', defaultValue: 'vertical', options: [...directionOptions] },
		{ name: 'spacing', type: 'text', defaultValue: '1rem' },
		{ name: 'align', type: 'select', defaultValue: 'stretch', options: [...alignOptions] },
		{ name: 'justify', type: 'select', defaultValue: 'start', options: [...justifyOptions] }
	];
</script>

<Story
	id="atoms-stack"
	title="Stack"
	component={Stack}
	category="Atoms"
	description="A flexbox-based component for arranging items with consistent spacing."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="rounded-md border border-dashed p-4">
			<Stack
				direction={props.direction}
				spacing={props.spacing}
				align={props.align}
				justify={props.justify}
			>
				{#snippet children()}
					<div class="rounded bg-primary-500 p-4 text-center text-primary-50">Item 1</div>
					<div class="rounded bg-primary-600 p-8 text-center text-primary-50">Item 2</div>
					<div class="rounded bg-primary-700 p-4 text-center text-primary-50">Item 3</div>
				{/snippet}
			</Stack>
		</div>
	{/snippet}
</Story>
