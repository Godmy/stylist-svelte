<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import InlineCode from './index.svelte';

	const variantOptions = ['default', 'success', 'warning', 'danger'] as const;

	const controls: SlotStory[] = [
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
		<section class="_c1">
			<div class="_c2">
				<p class="_c3 tracking-[0.24em]">Command Preview</p>
				<h3 class="_c4">Inline code in prose</h3>
				<div class="_c5">
					<p class="_c6">
						Run <InlineCode class={String(values.variant ?? 'default')}>{values.content}</InlineCode
						> to start the local workspace and preview the typography playground.
					</p>
				</div>
			</div>

			<div class="_c7">
				<h3 class="_c8">Variant Shelf</h3>
				<div class="_c9">
					{#each variantOptions as variant}
						<div class="_c10">
							<span class="_c11">{variant}</span>
							<InlineCode class={variant === 'default' ? undefined : variant}
								>{values.content}</InlineCode
							>
						</div>
					{/each}
				</div>
			</div>

			<div class="_c12">
				<h3 class="_c8">Usage Note</h3>
				<p class="_c13">
					Keep `InlineCode` inside prose for commands, file names, flags, and API fragments. Use a
					dedicated code block component when the content becomes multi-line or structural.
				</p>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1280px) {
		._c1 {
			grid-template-columns: minmax(0, 1.05fr) minmax(20rem, 0.95fr);
		}
	}
	._c10 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
	._c11 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c12 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	@media (min-width: 1280px) {
		._c12 {
			grid-column: span 2 / span 2;
		}
	}
	._c13 {
		margin-top: 0.75rem;
		color: var(--color-text-secondary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.25rem;
	}
	._c6 {
		line-height: 2rem;
		color: var(--color-text-secondary);
	}
	._c7 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c8 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c9 {
		margin-top: 1rem;
		display: grid;
		gap: 0.75rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
</style>
