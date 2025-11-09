<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import Spacer from './Spacer.svelte';

	const axisOptions = ['vertical', 'horizontal'] as const;

	type Props = {
		size: string;
		axis: (typeof axisOptions)[number];
	};

	const controls: ControlConfig[] = [
		{
			name: 'size',
			type: 'text',
			defaultValue: '4rem'
		},
		{
			name: 'axis',
			type: 'select',
			defaultValue: 'vertical',
			options: [...axisOptions]
		}
	];
</script>

<Story
	id="atoms-spacer"
	title="Spacer"
	component={Spacer}
	category="Atoms"
	description="A layout component to create empty space along a given axis."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div>
			<h3 class="mb-4 text-lg font-bold">Demonstration</h3>
			<p class="mb-2 text-sm text-gray-500">
				The spacer will create space based on the selected axis.
			</p>

			{#if props.axis === 'vertical'}
				<div class="rounded-md bg-primary-500 p-4 text-primary-50">Block 1</div>
				<Spacer axis={props.axis} size={props.size} />
				<div class="rounded-md bg-secondary-500 p-4 text-primary-50">Block 2</div>
			{:else}
				<div class="flex items-center">
					<div class="rounded-md bg-primary-500 p-4 text-primary-50">Block A</div>
					<Spacer axis={props.axis} size={props.size} />
					<div class="rounded-md bg-secondary-500 p-4 text-secondary-50">Block B</div>
				</div>
			{/if}
		</div>
	{/snippet}
</Story>
