<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Highlight from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const controls = [
		{ name: 'text', type: CONTROL_TYPES.TEXT, defaultValue: 'critical insights' },
		{
			name: 'variant',
			type: CONTROL_TYPES.SELECT,
			options: ['lemon', 'mint', 'lavender'],
			defaultValue: 'lemon'
		}
	];

	const variantClasses: Record<'lemon' | 'mint' | 'lavender', string> = {
		lemon: 'bg-yellow-100 text-amber-700',
		mint: 'bg-emerald-100 text-emerald-700',
		lavender: 'bg-indigo-100 text-indigo-700'
	};
</script>

<Story
	{controls}
	component={Highlight}
	title="Highlight"
	category="Atoms/Information/Typography/Inline"
	description="Inline marker for callouts inside prose."
	tags={['highlight', 'typography', 'inline', 'annotation']}
>
	{#snippet children(values: any)}
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
