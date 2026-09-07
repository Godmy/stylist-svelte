<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import OperationsHistory from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'count', type: 'number', defaultValue: 5, min: 0, max: 10 },
		{ name: 'includePending', type: 'boolean', defaultValue: true }
	];

	type Operation = {
		id: string;
		name: string;
		query: string;
		timestamp: Date;
		status: 'success' | 'error' | 'pending';
		executionTime: number;
	};

	function buildOperations(count: number, includePending: boolean) {
		const all: Operation[] = Array.from({ length: count }, (_, i) => ({
			id: `op-${i + 1}`,
			name: i % 2 === 0 ? 'SQL Query' : 'Mutation',
			query:
				i % 2 === 0
					? `SELECT * FROM users WHERE id = ${i + 1}`
					: `UPDATE users SET status='active' WHERE id = ${i + 1}`,
			timestamp: new Date(Date.now() - i * 120000),
			status: i % 3 === 0 ? 'success' : i % 3 === 1 ? 'error' : 'pending',
			executionTime: 100 + i * 20
		}));

		return includePending ? all : all.filter((op) => op.status !== 'pending');
	}
</script>

<Story
	id="molecules-operations-history"
	title="Molecules / Information / Management / OperationsHistory"
	component={OperationsHistory}
	category="Molecules/Information/Management"
	description="Queryable operation log with status badges and row actions."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<OperationsHistory operations={buildOperations(args.count, args.includePending)} />
			<p class="_c2">Search/filter interactions are available in the component toolbar.</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
