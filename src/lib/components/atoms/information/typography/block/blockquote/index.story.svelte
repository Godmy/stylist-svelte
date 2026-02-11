<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Blockquote from './index.svelte';

	type BlockquoteStoryProps = {
		quote: string;
		cite: string;
		withBorder: boolean;
		withBackground: boolean;
	};

	const controls: ControlConfig[] = [
		{
			name: 'quote',
			type: 'text',
			defaultValue: 'Design is the silent ambassador of your brand.'
		},
		{
			name: 'cite',
			type: 'text',
			defaultValue: 'Paul Rand'
		},
		{
			name: 'withBorder',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'withBackground',
			type: 'boolean',
			defaultValue: true
		}
	];

	const curatedQuotes = [
		{
			quote: 'Simplicity is about subtracting the obvious and adding the meaningful.',
			cite: 'John Maeda',
			border: true,
			background: true
		},
		{
			quote: 'Details make perfection, and perfection is not a detail.',
			cite: 'Leonardo da Vinci',
			border: true,
			background: false
		},
		{
			quote: 'Experience is the product.',
			cite: 'Brian Chesky',
			border: false,
			background: true
		}
	];
</script>

<Story
	id="atoms-blockquote"
	title="Blockquote"
	component={Blockquote}
	category="Atoms/Typography"
	description="Typeset citations with optional accent border and background emphasis."
	tags={['typography', 'blockquote', 'content']}
	{controls}
>
	{#snippet children(props)}
		<div class="space-y-8">
			<div
				class="rounded-2xl border border-gray-200/80 bg-white/70 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/30"
			>
				<Blockquote
					cite={props.cite}
					withBorder={props.withBorder}
					withBackground={props.withBackground}
					class="leading-relaxed text-gray-900 dark:text-gray-50"
				>
					{props.quote}
				</Blockquote>
				<p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
					Toggle border/background to preview different emphasis treatments while keeping the same
					content.
				</p>
			</div>

			<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{#each curatedQuotes as example}
					<div
						class="rounded-xl border border-gray-200/70 bg-white/60 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
					>
						<Blockquote
							cite={example.cite}
							withBorder={example.border}
							withBackground={example.background}
							class="text-sm text-gray-800 dark:text-gray-200"
						>
							{example.quote}
						</Blockquote>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
</Story>
