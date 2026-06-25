<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TableWithStripes from './index.svelte';

	type Props = {
		striped: boolean;
		hoverable: boolean;
		compact: boolean;
		showHeader: boolean;
		stripeColor: string;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'striped', type: 'boolean', defaultValue: true },
		{ name: 'hoverable', type: 'boolean', defaultValue: true },
		{ name: 'compact', type: 'boolean', defaultValue: false },
		{ name: 'showHeader', type: 'boolean', defaultValue: true },
		{
			name: 'stripeColor',
			type: 'select',
			options: ['gray', 'blue', 'green'],
			defaultValue: 'gray'
		}
	];

	const columns = ['id', 'name', 'email', 'status'];

	const data = [
		{ id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'active' },
		{ id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'inactive' },
		{ id: 3, name: 'Chris Brown', email: 'chris@example.com', status: 'active' },
		{ id: 4, name: 'Diana Lee', email: 'diana@example.com', status: 'pending' },
		{ id: 5, name: 'Eve Wilson', email: 'eve@example.com', status: 'active' },
		{ id: 6, name: 'Frank Miller', email: 'frank@example.com', status: 'active' },
		{ id: 7, name: 'Grace Taylor', email: 'grace@example.com', status: 'inactive' }
	];

	function handleRowClick(row: any) {
		console.log('Row clicked:', row);
	}
</script>

<Story
	id="organisms-table-with-stripes"
	title="Organisms / Interaction / Controls / Tables / Table With Stripes"
	component={TableWithStripes}
	category="Organisms/Interaction/Controls/Tables"
	description="A table component with striped rows for improved readability."
	tags={['table', 'stripes', 'zebra']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-table-with-stripes _c1">
			<h1 class="_c2">TableWithStripes Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive TableWithStripes</h2>
				<div class="_c5">
					<TableWithStripes {data} {columns} />
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
