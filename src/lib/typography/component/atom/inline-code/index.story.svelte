<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import InlineCode from './index.svelte';

	const variantOptions = ['default', 'success', 'warning', 'danger'] as const;

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'content',
			label: 'Content',
			description: 'Inline code text.',
			type: 'text',
			defaultValue: 'npm run dev'
		},
		{
			name: 'variant',
			label: 'Visual Variant',
			description: 'Maps to class-based styling for the code pill.',
			type: 'select',
			options: variantOptions,
			defaultValue: 'default'
		}
	];
</script>

<Story
	{controls}
	component={InlineCode}
	title="InlineCode"
	category="Atoms/Typography"
	description="Inline code token for commands, flags, package names, and code fragments inside prose."
	tags={['code', 'typography', 'syntax', 'highlighting']}
>
	{#snippet children(values: any)}
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<p class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase">
					Command Preview
				</p>
				<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">Inline code in prose</h3>
				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
					<p class="leading-8 text-[--color-text-secondary]">
						Run <InlineCode class={String(values.variant ?? 'default')}>{values.content}</InlineCode
						> to start the local workspace and preview the typography playground.
					</p>
				</div>
			</div>

			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
			>
				<h3 class="text-base font-semibold text-[--color-text-primary]">Variant Shelf</h3>
				<div class="mt-4 grid gap-3 rounded-[1.5rem] bg-[--color-background-primary] p-5">
					{#each variantOptions as variant}
						<div
							class="flex items-center justify-between gap-3 rounded-xl bg-[--color-background-secondary] px-4 py-3"
						>
							<span class="text-sm text-[--color-text-secondary]">{variant}</span>
							<InlineCode class={variant === 'default' ? undefined : variant}
								>{values.content}</InlineCode
							>
						</div>
					{/each}
				</div>
			</div>

			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm xl:col-span-2"
			>
				<h3 class="text-base font-semibold text-[--color-text-primary]">Usage Note</h3>
				<p class="mt-3 text-[--color-text-secondary]">
					Keep `InlineCode` inside prose for commands, file names, flags, and API fragments. Use a
					dedicated code block component when the content becomes multi-line or structural.
				</p>
			</div>
		</section>
	{/snippet}
</Story>
