<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TableWithGrouping from './index.svelte';

	type Props = {
		groupBy: string;
		showGroupCounts: boolean;
		collapsible: boolean;
		striped: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'groupBy', type: 'select', options: ['team', 'role', 'status'], defaultValue: 'team' },
		{ name: 'showGroupCounts', type: 'boolean', defaultValue: true },
		{ name: 'collapsible', type: 'boolean', defaultValue: true },
		{ name: 'striped', type: 'boolean', defaultValue: true }
	];

	const data = [
		{
			id: 1,
			name: 'Alice Johnson',
			email: 'alice@example.com',
			team: 'Engineering',
			role: 'Developer',
			status: 'active'
		},
		{
			id: 2,
			name: 'Bob Smith',
			email: 'bob@example.com',
			team: 'Design',
			role: 'Designer',
			status: 'active'
		},
		{
			id: 3,
			name: 'Chris Brown',
			email: 'chris@example.com',
			team: 'Engineering',
			role: 'Developer',
			status: 'inactive'
		},
		{
			id: 4,
			name: 'Diana Lee',
			email: 'diana@example.com',
			team: 'Marketing',
			role: 'Manager',
			status: 'active'
		},
		{
			id: 5,
			name: 'Eve Wilson',
			email: 'eve@example.com',
			team: 'Engineering',
			role: 'Lead',
			status: 'active'
		},
		{
			id: 6,
			name: 'Frank Miller',
			email: 'frank@example.com',
			team: 'Design',
			role: 'Designer',
			status: 'pending'
		},
		{
			id: 7,
			name: 'Grace Taylor',
			email: 'grace@example.com',
			team: 'Marketing',
			role: 'Specialist',
			status: 'active'
		}
	];

	function handleGroupToggle(group: string) {
		console.log('Group toggled:', group);
	}

	function handleRowClick(row: any) {
		console.log('Row clicked:', row);
	}
</script>

<Story
	id="organisms-table-with-grouping"
	title="Organisms / Interaction / Controls / Tables / Table With Grouping"
	component={TableWithGrouping}
	category="Organisms/Interaction/Controls/Tables"
	description="A table component with grouping capabilities for organizing data by categories."
	tags={['table', 'grouping', 'categories']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-table-with-grouping _c1">
			<h1 class="_c2">TableWithGrouping Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive TableWithGrouping</h2>
				<div class="_c5">
					<TableWithGrouping {data} groupBy={values.groupBy} />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		max-width: 56rem;
	}
</style>
