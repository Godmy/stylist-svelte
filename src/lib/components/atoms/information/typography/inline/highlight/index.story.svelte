<script lang="ts">
	import Highlight from './index.svelte';
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	type HighlightStoryProps = {
		text: string;
		variant: 'lemon' | 'mint' | 'lavender';
	};

	const controls: ControlConfig[] = [
		{ name: 'text', type: 'text', defaultValue: 'critical insights' },
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'lemon',
			options: ['lemon', 'mint', 'lavender']
		}
	];

	const variantClasses: Record<HighlightStoryProps['variant'], string> = {
		lemon: 'bg-yellow-100 text-amber-700',
		mint: 'bg-emerald-100 text-emerald-700',
		lavender: 'bg-indigo-100 text-indigo-700'
	};
</script>

<Story
	id="atoms-highlight"
	title="Highlight"
	component={Highlight}
	category="Atoms"
	description="Inline marker for callouts inside prose."
	tags={['inline', 'annotation']}
	{controls}
>
	{#snippet children(props: HighlightStoryProps)}
		<div class="space-y-6">
			<p
				class="rounded-2xl border border-gray-200/70 bg-white/80 p-5 text-gray-800 shadow-sm dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-100"
			>
				Product reviews surfaced <Highlight class={`${variantClasses[props.variant]} rounded px-1`}>
					{props.text}
				</Highlight>
				we almost missed.
			</p>

			<div class="grid gap-3 text-sm">
				{#each Object.entries(variantClasses) as [variant, classes]}
					<p
						class="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900"
					>
						<Highlight class={`${classes} rounded px-1`}>{variant} marker</Highlight>
					</p>
				{/each}
			</div>
		</div>
	{/snippet}
</Story>
