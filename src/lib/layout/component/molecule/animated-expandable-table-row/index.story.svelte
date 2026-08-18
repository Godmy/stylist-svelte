<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AnimatedExpandableTableRow from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'expanded', type: 'boolean', defaultValue: false },
		{ name: 'expandable', type: 'boolean', defaultValue: true },
		{ name: 'colspan', type: 'number', defaultValue: 3, min: 2, max: 6, step: 1 }
	];
</script>

<Story
	component={AnimatedExpandableTableRow}
	title="AnimatedExpandableTableRow"
	description="Expandable row pattern for tabular details."
	{controls}
>
	{#snippet children(values: any)}
		<table class="_c1">
			<tbody>
				<AnimatedExpandableTableRow
					expanded={values.expanded}
					expandable={values.expandable}
					colspan={values.colspan}
				>
					{#snippet children()}
						<td class="_c2">INV-1042</td>
						<td class="_c2">Paid</td>
					{/snippet}
					{#snippet details()}
						<div class="_c3">Paid via corporate card on 2026-02-20.</div>
					{/snippet}
				</AnimatedExpandableTableRow>
			</tbody>
		</table>
	{/snippet}
</Story>

<style>
	._c1 {
		width: 100%;
		border-collapse: collapse;
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
	._c2 {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
