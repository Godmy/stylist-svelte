<script lang="ts">
	type Props = {
		items?: { id: string; label: string }[];
		onRemove?: (id: string) => void;
	};

	let { items = [], onRemove }: Props = $props();
</script>

{#if items.length > 0}
	<div class="tc-active-filters" aria-label="Выбранные фильтры">
		{#each items as item (item.id)}
			<button type="button" onclick={() => onRemove?.(item.id)}>{item.label}<span aria-hidden="true">×</span></button>
		{/each}
	</div>
{/if}

<style>
	.tc-active-filters {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.tc-active-filters button {
		border: 0;
		border-radius: 999px;
		padding: 8px 10px 8px 12px;
		background: rgba(23, 35, 31, 0.08);
		color: #17231f;
		cursor: pointer;
	}
	.tc-active-filters span {
		margin-left: 8px;
		opacity: 0.72;
	}
</style>
