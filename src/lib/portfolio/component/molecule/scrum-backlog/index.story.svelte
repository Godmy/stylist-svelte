<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ScrumBacklog from './index.svelte';

	let added = $state(0);
	let updated = $state(0);
	let removed = $state(0);

	const controls: SlotStory[] = [
		{ name: 'showFilters', type: 'boolean', defaultValue: true },
		{ name: 'showOnlyHighPriority', type: 'boolean', defaultValue: false }
	];

	type BacklogItem = {
		id: string;
		title: string;
		description: string;
		assignee: string;
		priority: 'low' | 'medium' | 'high';
		estimatedHours: number;
		status: 'todo' | 'in-progress' | 'done';
		tags: string[];
		createdAt: Date;
		updatedAt: Date;
	};

	const baseItems: BacklogItem[] = [
		{
			id: 'item1',
			title: 'Authentication flow',
			description: 'Login, logout and refresh token',
			assignee: 'Ivan Petrov',
			priority: 'high',
			estimatedHours: 16,
			status: 'todo',
			tags: ['backend', 'auth'],
			createdAt: new Date(2026, 1, 1),
			updatedAt: new Date(2026, 1, 1)
		},
		{
			id: 'item2',
			title: 'Landing redesign',
			description: 'Hero and feature sections',
			assignee: 'Anna Sidorova',
			priority: 'medium',
			estimatedHours: 10,
			status: 'in-progress',
			tags: ['frontend', 'design'],
			createdAt: new Date(2026, 1, 2),
			updatedAt: new Date(2026, 1, 3)
		},
		{
			id: 'item3',
			title: 'Payment webhook',
			description: 'Handle successful and failed transactions',
			assignee: 'Mikhail Kozlov',
			priority: 'high',
			estimatedHours: 20,
			status: 'todo',
			tags: ['payments'],
			createdAt: new Date(2026, 1, 3),
			updatedAt: new Date(2026, 1, 3)
		},
		{
			id: 'item4',
			title: 'Accessibility pass',
			description: 'Keyboard and focus improvements',
			assignee: 'Elena Morozova',
			priority: 'low',
			estimatedHours: 8,
			status: 'done',
			tags: ['a11y'],
			createdAt: new Date(2026, 1, 4),
			updatedAt: new Date(2026, 1, 5)
		}
	];
</script>

<Story
	id="molecules-scrum-backlog"
	title="Molecules / Information / Management / Agile / ScrumBacklog"
	component={ScrumBacklog}
	category="Molecules/Information/Management/Agile"
	description="Interactive sprint backlog with filters and CRUD callbacks."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<div class="_c2">
				<ScrumBacklog
					data={{
						items: args.showOnlyHighPriority
							? baseItems.filter((item) => item.priority === 'high')
							: baseItems
					}}
					showFilters={args.showFilters}
					onItemAdd={() => (added += 1)}
					onItemUpdate={() => (updated += 1)}
					onItemDelete={() => (removed += 1)}
				/>
			</div>
			<p class="_c3">
				Events: add {added}, update {updated}, delete {removed}
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
		height: 680px;
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
