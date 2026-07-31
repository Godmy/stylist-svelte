<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import StickyLayout from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'headerShadow', type: 'boolean', defaultValue: true },
		{ name: 'footerShadow', type: 'boolean', defaultValue: true },
		{ name: 'fillHeight', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={StickyLayout}
	title="StickyLayout"
	description="Layout with sticky header/footer and scrollable content zone."
	{controls}
>
	{#snippet children(values: any)}
		<StickyLayout
			headerShadow={values.headerShadow}
			footerShadow={values.footerShadow}
			fillHeight={values.fillHeight}
			class="_c1"
		>
			{#snippet header()}
				<div class="_c2">Sticky Header</div>
			{/snippet}
			{#snippet children()}
				<div class="_c3">
					{#each Array(10) as _, i}
						<div class="_c4">
							Scrollable item {i + 1}
						</div>
					{/each}
				</div>
			{/snippet}
			{#snippet footer()}
				<div class="_c5">Sticky Footer</div>
			{/snippet}
		</StickyLayout>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 16rem;
		overflow: hidden;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
	._c2 {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
	}
	._c3 {
		padding: 1rem;
	}
	._c3 > * + * {
		margin-top: 0.75rem;
	}
	._c4 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c5 {
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
