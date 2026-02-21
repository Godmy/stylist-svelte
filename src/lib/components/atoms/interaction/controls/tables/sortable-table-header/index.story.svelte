<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import SortableTableHeader from './index.svelte';

	let currentSortKey = $state('name');
	let currentSortDirection = $state<'asc' | 'desc' | null>('asc');

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Name' },
		{ name: 'sortKey', type: 'text', defaultValue: 'name' },
		{ name: 'currentSortDirection', type: 'select', defaultValue: 'asc', options: ['asc', 'desc', 'null'] }
	];

	function handleSort(key: string) {
		if (currentSortKey === key) {
			currentSortDirection = currentSortDirection === 'asc' ? 'desc' : currentSortDirection === 'desc' ? null : 'asc';
		} else {
			currentSortKey = key;
			currentSortDirection = 'asc';
		}
	}
</script>

<Story component={SortableTableHeader} title="SortableTableHeader" description="Table header cell with sort indicator and toggle behavior." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3">
			<table class="min-w-full border-collapse rounded-xl border border-[--color-border-primary]">
				<thead class="bg-[--color-background-secondary]">
					<tr>
						<SortableTableHeader
							title={values.title}
							sortKey={values.sortKey}
							currentSortKey={currentSortKey}
							currentSortDirection={values.currentSortDirection === 'null' ? null : values.currentSortDirection}
							onValueChange={handleSort}
						/>
					</tr>
				</thead>
			</table>
			<p class="text-sm text-[--color-text-secondary]">Active sort: {currentSortKey} ({currentSortDirection ?? 'none'})</p>
		</div>
	{/snippet}
</Story>
