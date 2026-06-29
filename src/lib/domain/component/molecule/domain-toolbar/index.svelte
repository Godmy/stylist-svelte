<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import { DOMAIN_MENU_ICONS } from '$stylist/domain/const/map/domain-menu';
	import type { RecipeDomainToolbar } from '$stylist/domain/interface/recipe/domain-toolbar';

	let {
		active,
		orientation = 'horizontal',
		showLabel = true,
		onSelect,
		class: className = ''
	}: RecipeDomainToolbar = $props();
</script>

<IconToolbar
	items={DOMAIN_MENU_ICONS}
	label="domain"
	{active}
	{orientation}
	{showLabel}
	{onSelect}
	class="c-domain-toolbar {className}"
/>

<style>
</style>
