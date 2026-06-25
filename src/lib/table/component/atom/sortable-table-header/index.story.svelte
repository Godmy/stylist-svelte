<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SortableTableHeader from './index.svelte';

	let currentSortKey = $state('name');
	let currentSortDirection = $state<'asc' | 'desc' | null>('asc');

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Name' },
		{ name: 'sortKey', type: 'text', defaultValue: 'name' },
		{
			name: 'currentSortDirection',
			type: 'select',
			defaultValue: 'asc',
			options: ['asc', 'desc', 'null']
		}
	];

	function handleSort(key: string) {
		if (currentSortKey === key) {
			currentSortDirection =
				currentSortDirection === 'asc' ? 'desc' : currentSortDirection === 'desc' ? null : 'asc';
		} else {
			currentSortKey = key;
			currentSortDirection = 'asc';
		}
	}
</script>

<Story
	component={SortableTableHeader}
	title="SortableTableHeader"
	description="Table header cell with sort indicator and toggle behavior."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<table class="_c2 border-collapse">
				<thead class="_c3">
					<tr>
						<SortableTableHeader
							title={values.title}
							sortKey={values.sortKey}
							{currentSortKey}
							currentSortDirection={values.currentSortDirection === 'null'
								? null
								: values.currentSortDirection}
							onValueChange={handleSort}
						/>
					</tr>
				</thead>
			</table>
			<p class="_c4">
				Active sort: {currentSortKey} ({currentSortDirection ?? 'none'})
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		min-width: 100%;
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
	._c3 {
		background-color: var(--color-background-secondary);
	}
	._c4 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
