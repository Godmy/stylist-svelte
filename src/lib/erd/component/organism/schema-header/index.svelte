<script lang="ts">
	import SchemaTool from '$stylist/erd/component/organism/schema-tool/index.svelte';
	import type { SchemaHeaderProps } from '$stylist/erd/type/struct/schema-header-props';

	let {
		title = 'Schema',
		zoom = 1,
		showRelations = true,
		highlightRelations = true,
		layout = 'grid',
		canImport = true,
		canExport = true,
		mode = 'live',
		textPanelVisible = true
	}: SchemaHeaderProps = $props();
</script>

<header class="schema-header">
	<h1 class="schema-header__title">{title}</h1>
	<SchemaTool
		{zoom}
		{showRelations}
		{highlightRelations}
		{layout}
		{canImport}
		{canExport}
		{mode}
		{textPanelVisible}
		on:import
		on:export
		on:zoom-in
		on:zoom-out
		on:zoom-reset
		on:layout-change
		on:toggle-relations
		on:toggle-highlight
		on:mode-change
		on:toggle-text-panel
	/>
</header>

<style>
	.schema-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.75rem;
		padding: 0.55rem 0.85rem;
		border-bottom: 1px solid var(--color-border-primary, rgba(22, 31, 44, 0.12));
		background: var(--color-background-primary, #ffffff);
	}

	.schema-header__title {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--color-text-primary, #17212e);
		white-space: nowrap;
	}
</style>
