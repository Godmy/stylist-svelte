<script lang="ts">
	import type { SchemaTableFieldProps } from '$stylist/erd/type/struct/schema-table-field-props';

	let { field, active = false, related = false }: SchemaTableFieldProps = $props();
</script>

<div class={`schema-table-field ${active ? 'schema-table-field--active' : ''} ${related ? 'schema-table-field--related' : ''}`}>
	<div class="schema-table-field__main">
		<span class="schema-table-field__name">{field.name}</span>
		<span class="schema-table-field__type">{field.type}</span>
	</div>
	<div class="schema-table-field__badges">
		{#if field.primary}
			<span>PK</span>
		{/if}
		{#if field.required}
			<span>NN</span>
		{/if}
		{#if field.unique}
			<span>UQ</span>
		{/if}
		{#if field.reference}
			<span>FK</span>
		{/if}
	</div>
</div>

<style>
	.schema-table-field {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.65rem;
		padding: 0.58rem 0.8rem;
		border-bottom: 1px solid rgba(22, 31, 44, 0.08);
		color: #202b3c;
	}

	.schema-table-field--active,
	.schema-table-field--related {
		background: #fff7ed;
	}

	.schema-table-field__main {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.6rem;
		min-width: 0;
	}

	.schema-table-field__name {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.84rem;
		font-weight: 650;
	}

	.schema-table-field__type {
		color: #637083;
		font-size: 0.78rem;
	}

	.schema-table-field__badges {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.25rem;
	}

	.schema-table-field__badges span {
		padding: 0.12rem 0.28rem;
		border-radius: 0.35rem;
		background: #e8edf4;
		color: #3b4657;
		font-size: 0.62rem;
		font-weight: 700;
	}
</style>
