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
		<div class="sb-organisms-column-manager _c1">
			<h1 class="_c2">ColumnManager Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive ColumnManager</h2>
				<div class="_c5">
					<ColumnManager {columns} />
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
		max-width: 28rem;
	}
</style>
