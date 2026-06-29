<script lang="ts">
	import SchemaTableField from '$stylist/erd/component/atom/schema-table-field/index.svelte';
	import SchemaTableHeader from '$stylist/erd/component/atom/schema-table-header/index.svelte';
	import type { SchemaTableProps } from '$stylist/erd/type/struct/schema-table-props';

	let { table, active = false, relatedFieldIds = [] }: SchemaTableProps = $props();
</script>

<article class={`schema-table ${active ? 'schema-table--active' : ''}`}>
	<SchemaTableHeader {table} {active} />
	<div class="schema-table__fields">
		{#each table.fields as field (field.id)}
			<SchemaTableField
				{field}
				related={relatedFieldIds.includes(field.id)}
			/>
		{/each}
	</div>
</article>

<style>
	.schema-table {
		width: 260px;
		overflow: hidden;
		border: 1px solid rgba(22, 31, 44, 0.14);
		border-radius: 0.5rem;
		background: #ffffff;
		box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
	}

	.schema-table--active {
		border-color: #4d92cf;
		box-shadow: 0 18px 34px rgba(77, 146, 207, 0.18);
	}

	.schema-table__fields {
		display: grid;
	}
</style>
