<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
	import Highlight from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'text', type: 'text', defaultValue: 'critical insights' },
		{
			name: 'variant',
			type: 'select',
			options: ['lemon', 'mint', 'lavender'],
			defaultValue: 'lemon'
		}
	];

	const variantClasses: Record<'lemon' | 'mint' | 'lavender', string> = {
		lemon: 'bg-yellow-100 text-amber-700',
		mint: 'bg-emerald-100 text-emerald-700',
		lavender: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]'
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
				class="rounded-2xl border border-[var(--color-border-primary)]/70 bg-[var(--color-background-primary)]/80 p-5 text-[var(--color-text-primary)] shadow-sm dark:border-[var(--color-border-primary)] dark:bg-[var(--color-neutral-900)]/40 dark:text-[var(--color-neutral-100)]"
			>
				Product reviews surfaced <Highlight class={`${variantClasses[values.variant as 'lemon' | 'mint' | 'lavender']} rounded px-1`}>
					{values.text}
				</Highlight>
				we almost missed.
			</p>

			<div class="grid gap-3 text-sm">
				{#each Object.entries(variantClasses) as [variant, classes]}
					<p
						class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-3 py-2 dark:border-[var(--color-border-primary)] dark:bg-[var(--color-neutral-900)]"
					>
						<Highlight class={`${classes} rounded px-1`}>{variant} marker</Highlight>
					</p>
				{/each}
			</div>
		</div>
	{/snippet}
</Story>









