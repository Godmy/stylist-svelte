<script lang="ts">
	import type { KanbanColumnType } from '$stylist/portfolio/type/object/kanban-column';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import KanbanColumn from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'droppable', type: 'boolean', defaultValue: true },
		{ name: 'cardCount', type: 'number', defaultValue: 2, min: 1, max: 5 }
	];

	function getColumn(cardCount: number): KanbanColumnType {
		return {
			id: 'todo',
			title: 'To do',
			cards: Array.from({ length: cardCount }, (_, i) => ({
				id: `c-${i + 1}`,
				title: `Task ${i + 1}`,
				description: `Task description ${i + 1}`,
				assignee: 'Team member',
				order: i,
				priority: i % 2 === 0 ? 'high' : 'medium',
				status: 'todo'
			}))
		};
	}
</script>

<Story
	id="molecules-kanban-column"
	title="Molecules / Information / Management / Kanban / KanbanColumn"
	component={KanbanColumn}
	category="Molecules/Information/Management/Kanban"
	description="Single Kanban column with configurable card amount."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<KanbanColumn
				column={getColumn(args.cardCount as number)}
				droppable={args.droppable as boolean}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
</style>
