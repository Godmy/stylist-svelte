<script lang="ts">
	import type { KanbanBoardAction } from '$stylist/portfolio/type/object/kanban-board/kanbanboardaction';
	import type { KanbanBoardType } from '$stylist/portfolio/type/object/kanban-board/kanbanboardtype';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import KanbanBoard from './index.svelte';

	let moves = $state(0);
	let newColumns = $state(0);
	let newCards = $state(0);
	let externalUpdates = $state(0);

	const controls: SlotStory[] = [
		{ name: 'allowReordering', type: 'boolean', defaultValue: true },
		{ name: 'controlled', type: 'boolean', defaultValue: false }
	];

	const initialBoard: KanbanBoardType = {
		id: 'board1',
		title: 'Q1 Launch',
		columns: [
			{
				id: 'todo',
				title: 'To do',
				cards: [{ id: 't1', title: 'Draft plan', order: 0, priority: 'medium', status: 'todo' }]
			},
			{
				id: 'in-progress',
				title: 'In progress',
				cards: [
					{ id: 't2', title: 'Build onboarding', order: 0, priority: 'high', status: 'in-progress' }
				]
			},
			{
				id: 'done',
				title: 'Done',
				cards: [{ id: 't3', title: 'Design sync', order: 0, priority: 'low', status: 'done' }]
			}
		]
	};

	let board = $state<KanbanBoardType>(initialBoard);
</script>

<Story
	id="organisms-kanban-board"
	title="Organisms / Information / Management / Kanban / KanbanBoard"
	component={KanbanBoard}
	category="Organisms/Information/Management/Kanban"
	description="Task board with columns and card movement callbacks."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<div class="_c2">
				<KanbanBoard
					{board}
					controlled={args.controlled as boolean}
					allowReordering={args.allowReordering as boolean}
					onCardMove={() => (moves += 1)}
					onColumnAdd={() => (newColumns += 1)}
					onCardAdd={() => (newCards += 1)}
					onBoardChange={(nextBoard: KanbanBoardType, action: KanbanBoardAction) => {
						if (args.controlled) {
							board = nextBoard;
							externalUpdates += 1;
						}
					}}
				/>
			</div>
			<p class="_c3">
				Actions: move {moves}, add column {newColumns}, add card {newCards}, external sync {externalUpdates}
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		height: 560px;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
