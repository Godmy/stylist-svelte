<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import DataTableShell from './index.svelte';
	import { createColumn } from '$stylist/table/function/factory/column';

	type User = { name: string; role: string; status: string; email: string };

	const schema = [
		createColumn<User>('name',   { cell: 'text', header: 'Name',   sortable: true }),
		createColumn<User>('role',   { cell: 'pill', header: 'Role',   filterable: 'pills' }),
		createColumn<User>('status', { cell: 'pill', header: 'Status', filterable: 'pills' }),
		createColumn<User>('email',  { cell: 'text', header: 'Email',  sortable: true }),
	];

	const names   = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
	const roles   = ['Admin', 'Editor', 'Viewer'];
	const data: User[] = Array.from({ length: 30 }, (_, i) => ({
		name:   names[i % names.length],
		role:   roles[i % roles.length],
		status: i % 4 === 0 ? 'Inactive' : 'Active',
		email:  `user${i}@example.com`,
	}));
</script>

<Story component={DataTableShell} title="DataTableShell" description="Full table shell: search, pill filters, column manager, sorting, pagination.">
	{#snippet children()}
		<DataTableShell
			{data}
			{schema}
			title="Users"
			showSearch
			showColumnManager
			defaultPageSize={10}
		/>
	{/snippet}
</Story>
