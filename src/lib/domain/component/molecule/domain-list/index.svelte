<script lang="ts">
	import DomainEntity from '$stylist/domain/component/atom/domain-entity/index.svelte';
	import DomainListHeader from '$stylist/domain/component/atom/domain-list-header/index.svelte';

	interface DomainListItem {
		name: string;
		path: string;
		files: { path: string }[];
	}

	interface DomainListProps {
		entities?: DomainListItem[];
		activePath?: string;
		onSelect?: (path: string) => void;
		class?: string;
	}

	let { entities = [], activePath, onSelect, class: className = '' }: DomainListProps = $props();
</script>

<div class="c-domain-list {className}">
	<DomainListHeader count={entities.length} />
	<div class="list-body">
		{#if entities.length === 0}
			<p class="empty-state">No entities in selected folder.</p>
		{:else}
			{#each entities as entity (entity.path)}
				<DomainEntity
					name={entity.name}
					path={entity.path}
					fileCount={entity.files.length}
					active={activePath === entity.path}
					{onSelect}
				/>
			{/each}
		{/if}
	</div>
</div>

<style>
	.c-domain-list {
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: 0;
		border-top: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
	}

	.list-body {
		display: grid;
		align-content: start;
		gap: 2px;
		overflow: auto;
		padding: 0.35rem 0.35rem 0.35rem 0.1rem;
	}

	.empty-state {
		margin: 0;
		padding: 1rem;
		color: var(--color-text-secondary);
		font-size: 13px;
	}
</style>
