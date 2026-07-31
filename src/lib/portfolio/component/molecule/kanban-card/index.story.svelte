<script lang="ts">
	type KanbanCardType = {
		id: string;
		title: string;
		description?: string;
		priority?: 'low' | 'medium' | 'high';
		tags?: string[];
		assignee?: string | { name: string };
		updatedAt?: Date;
	};

	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import KanbanCard from './index.svelte';

	const id = 'molecules-kanban-card';
	const title = 'Molecules / Management / Kanban / Kanban Card';
	const description = 'Draggable kanban card with inline editing, tags, assignee and actions.';
	const controls: SlotStory[] = [];

	const sampleCard: KanbanCardType = {
		id: 'card-1',
		title: 'Design new backlog workflow',
		description:
			'Split backlog write paths from generic content routes and prepare disk-based persistence.',
		priority: 'high',
		tags: ['backlog', 'server', 'ui'],
		assignee: { name: 'Dmitrii' },
		updatedAt: new Date()
	};

	const lowPriorityCard: KanbanCardType = {
		id: 'card-2',
		title: 'Refresh story labels',
		description: 'Align story titles with current component placement.',
		priority: 'low',
		tags: ['stories'],
		assignee: 'Design team',
		updatedAt: new Date()
	};

	const mediumPriorityCard: KanbanCardType = {
		id: 'card-3',
		title: 'Audit menu actions',
		description: 'Check which dropdown commands should become real filesystem actions.',
		priority: 'medium',
		tags: ['domain-explorer', 'menu'],
		updatedAt: new Date()
	};
</script>

<Story {id} {title} {description} component={KanbanCard} category="Molecules" {controls}>
	{#snippet children()}
		<div class="_c1">
			<div class="_c2">
				<KanbanCard card={sampleCard} />
			</div>
			<div class="_c2">
				<KanbanCard card={lowPriorityCard} />
			</div>
			<div class="_c2">
				<KanbanCard card={mediumPriorityCard} />
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	@media (min-width: 768px) {
		._c1 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	._c2 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.75rem;
	}
</style>
