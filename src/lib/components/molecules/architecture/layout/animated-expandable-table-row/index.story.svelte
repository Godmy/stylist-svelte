<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import AnimatedExpandableTableRow from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'expanded', type: 'boolean', defaultValue: false },
		{ name: 'expandable', type: 'boolean', defaultValue: true },
		{ name: 'colspan', type: 'number', defaultValue: 3, min: 2, max: 6, step: 1 }
	];
</script>

<Story component={AnimatedExpandableTableRow} title="AnimatedExpandableTableRow" description="Expandable row pattern for tabular details." {controls}>
	{#snippet children(values: any)}
		<table class="w-full border-collapse rounded-xl border border-[--color-border-primary]">
			<tbody>
				<AnimatedExpandableTableRow expanded={values.expanded} expandable={values.expandable} colspan={values.colspan}>
					{#snippet children()}
						<td class="px-4 py-3">INV-1042</td>
						<td class="px-4 py-3">Paid</td>
					{/snippet}
					{#snippet details()}
						<div class="text-sm text-[--color-text-secondary]">Paid via corporate card on 2026-02-20.</div>
					{/snippet}
				</AnimatedExpandableTableRow>
			</tbody>
		</table>
	{/snippet}
</Story>
