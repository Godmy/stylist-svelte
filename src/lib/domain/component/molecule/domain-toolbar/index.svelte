<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import type { RecipeDomainToolbar } from '$stylist/domain/interface/recipe/domain-toolbar';
	import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';
	import type { SlotSvgName } from '$stylist/svg/interface/slot/svg-name';

	let {
		active,
		domains = [],
		orientation = 'horizontal',
		showLabel = true,
		onSelect,
		class: className = ''
	}: RecipeDomainToolbar = $props();

	const items = $derived.by<SlotSvgName[]>(() =>
		[...domains]
			.sort((a, b) => a.localeCompare(b))
			.map((name) => ({
				name,
				svg: TOKEN_ICON_REGISTRY[name] ?? TOKEN_ICON_REGISTRY['domain']
			}))
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
