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

	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import KanbanCard from './index.svelte';

	const id = 'molecules-kanban-card';
	const title = 'Molecules / Management / Kanban / Kanban Card';
	const description = 'Draggable kanban card with inline editing, tags, assignee and actions.';
	const controls: InterfaceControllerSettings[] = [];

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
		<div class="grid gap-4 rounded-xl bg-[var(--color-background-secondary)] p-4 md:grid-cols-3">
			<div
				class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3"
			>
				<KanbanCard card={sampleCard} />
			</div>
			<div
				class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3"
			>
				<KanbanCard card={lowPriorityCard} />
			</div>
			<div
				class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3"
			>
				<KanbanCard card={mediumPriorityCard} />
			</div>
		</div>
	{/snippet}
</Story>
