<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/object/error-diagnostic-item';
	import ErrorDiagnosticList from './index.svelte';

	const items: ErrorDiagnosticItem[] = [
		{
			id: 'tsc-1',
			project: 'stylist-svelte',
			analyzer: 'tsc_stylist_svelte',
			severity: 'error',
			code: 'TS2322',
			path: 'stylist-svelte/src/lib/dashboard/component/molecule/error-diagnostic-list/index.svelte',
			line: 42,
			column: 11,
			message: 'Type string is not assignable to the expected dashboard diagnostic severity union.'
		},
		{
			id: 'yarn-1',
			project: 'stylist-playground',
			analyzer: 'yarn_check_stylist_playground',
			severity: 'warning',
			code: 'SvelteCheck',
			path: 'stylist-svelte/src/lib/domain/component/page/page-domain/index.svelte',
			line: 118,
			message: 'Long diagnostic messages wrap inside the item without forcing horizontal overflow in mobile layouts.'
		}
	];

	let query = $state('');
	let severityFilter = $state<'all' | 'error' | 'warning' | 'info'>('all');
	let selectedId = $state('tsc-1');
</script>

<Story
	component={ErrorDiagnosticList}
	title="ErrorDiagnosticList"
	description="Searchable diagnostic rows for unified errors CLI output."
	category="Dashboard Molecules"
	tags={['dashboard', 'errors']}
>
	{#snippet children()}
		<div class="_wrap">
			<ErrorDiagnosticList
				{items}
				{query}
				{severityFilter}
				{selectedId}
				onQueryChange={(value) => {
					query = value;
				}}
				onSeverityChange={(value) => {
					severityFilter = value;
				}}
				onSelect={(item) => {
					selectedId = item.id;
				}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._wrap {
		max-width: 56rem;
	}
</style>
