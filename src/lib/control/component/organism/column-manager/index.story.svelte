<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ColumnManager from './index.svelte';

	type Props = {
		allowReorder: boolean;
		allowToggle: boolean;
		showLockIndicator: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'allowReorder', type: 'boolean', defaultValue: true },
		{ name: 'allowToggle', type: 'boolean', defaultValue: true },
		{ name: 'showLockIndicator', type: 'boolean', defaultValue: true }
	];

	const columns = [
		{ key: 'id', header: 'ID', visible: true, locked: true },
		{ key: 'name', header: 'Name', visible: true, locked: false },
		{ key: 'email', header: 'Email', visible: true, locked: false },
		{ key: 'status', header: 'Status', visible: true, locked: false },
		{ key: 'role', header: 'Role', visible: false, locked: false },
		{ key: 'created', header: 'Created', visible: true, locked: false },
		{ key: 'actions', header: 'Actions', visible: true, locked: true }
	];

	function handleVisibilityChange(columnKey: string, visible: boolean) {
		console.log(`Column ${columnKey} visibility changed: ${visible}`);
	}

	function handleReorder(fromIndex: number, toIndex: number) {
		console.log(`Column reordered from ${fromIndex} to ${toIndex}`);
	}
</script>

<Story
	id="organisms-column-manager"
	title="Organisms / Interaction / Controls / Tables / Column Manager"
	component={ColumnManager}
	category="Organisms/Interaction/Controls/Tables"
	description="A column manager component for controlling table column visibility and order."
	tags={['table', 'columns', 'manager', 'visibility']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-column-manager p-4">
			<h1 class="mb-4 text-lg font-semibold">ColumnManager Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive ColumnManager</h2>
				<div class="max-w-md">
					<ColumnManager {columns} />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
