<script lang="ts">
	import type { RecipeTable } from '$stylist/table/interface/recipe/table';
	import { ObjectManagerTable } from '$stylist/table/class/object-manager/table';

	let props: RecipeTable = $props();
	const restProps = $derived(ObjectManagerTable.getTableRestProps(props));
</script>

<table
	class="c-table {props.striped ? 'c-table--striped' : ''} {props.bordered ? 'c-table--bordered' : ''} {props.hoverable ? 'c-table--hoverable' : ''} {props.class ?? ''}"
	{...restProps}
>
	{#if props.content}{@render props.content()}{/if}
</table>

<style>
	.c-table {
		width: 100%;
		border-collapse: collapse;
	}

	.c-table--bordered {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		overflow: hidden;
	}
</style>
