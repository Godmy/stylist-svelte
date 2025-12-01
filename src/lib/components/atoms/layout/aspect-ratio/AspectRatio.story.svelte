<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import AspectRatio from './AspectRatio.svelte';

	type Props = {
		ratio: number;
	};

	const controls: ControlConfig[] = [
		{
			name: 'ratio',
			type: 'number',
			defaultValue: 1.777, // 16/9
			step: 0.1
		}
	];
</script>

<Story
	id="atoms-aspect-ratio"
	title="AspectRatio"
	component={AspectRatio}
	category="Atoms"
	description="A layout component that maintains a consistent aspect ratio for its child."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="max-w-md">
			<p class="mb-2 text-sm text-gray-500">
				This box will maintain an aspect ratio of {props.ratio.toFixed(2)}, regardless of its width.
			</p>
			<AspectRatio ratio={props.ratio}>
				{#snippet children()}
					<div
						class="flex h-full w-full items-center justify-center rounded-md bg-primary-500 text-primary-50"
					>
						<img
							src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1200&auto=format&fit=crop"
							alt="Woman working on a laptop"
							class="h-full w-full rounded-md object-cover"
						/>
					</div>
				{/snippet}
			</AspectRatio>
		</div>
	{/snippet}
</Story>
