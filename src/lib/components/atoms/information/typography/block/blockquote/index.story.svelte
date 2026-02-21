<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Blockquote from './index.svelte';

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
	{controls}
	component={Blockquote}
	title="Blockquote Component"
	description="Typeset citations with optional accent border and background emphasis"
	tags={['information', 'typography', 'blockquote', 'content']}
>
	{#snippet children(values: any)}
		<div class="space-y-8">
			<div
				class="rounded-2xl border border-gray-200/80 bg-white/70 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/30"
			>
				<Blockquote
					cite={values.cite as string}
					withBorder={values.withBorder as boolean}
					withBackground={values.withBackground as boolean}
					class="leading-relaxed text-gray-900 dark:text-gray-50"
				>
					{values.quote as string}
				</Blockquote>
				<p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
					Toggle border/background to preview different emphasis treatments while keeping the same
					content.
				</p>
				<p class="text-sm text-gray-600 dark:text-gray-300">
					Current values: quote="{values.quote as string}", cite="{values.cite as string}"
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
