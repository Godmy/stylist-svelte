<script lang="ts">
	import type { SchemaTableHeaderProps } from '$stylist/erd/type/struct/schema-table-header-props';

	let { table, active = false }: SchemaTableHeaderProps = $props();
</script>

<div class={`schema-table-header ${active ? 'schema-table-header--active' : ''}`}>
	<strong>{table.name}</strong>
	<span>{table.fields.length}</span>
</div>

<style>
	.schema-table-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.75rem 0.9rem;
		border-bottom: 1px solid rgba(22, 31, 44, 0.12);
		background: #f6f8fb;
		color: #172033;
	}

	.schema-table-header--active {
		background: #eaf3ff;
		color: #174a7c;
	}

	.schema-table-header strong {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.92rem;
	}

	.schema-table-header span {
		flex: 0 0 auto;
		font-size: 0.72rem;
		color: #627086;
	}
</style>
