<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import type { RecipeDomainToolbar } from '$stylist/domain/interface/recipe/domain-toolbar';
	import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';

	let {
		active,
		domains = [],
		orientation = TOKEN_ORIENTATION[0],
		showLabel = true,
		onSelect,
		class: className = ''
	}: RecipeDomainToolbar = $props();

	const items = $derived.by(() =>
		[...domains].sort((a, b) => a.localeCompare(b)).map((name) => ({ name }))
	);
</script>

<IconToolbar
	{items}
	label="domain"
	{active}
	{orientation}
	{showLabel}
	{onSelect}
	class="c-domain-toolbar {className}"
/>

<style>
</style>
