<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import { DOMAIN_MENU_ICONS } from '$stylist/domain/const/map/domain-menu';

	interface DomainToolbarProps {
		active?: string;
		orientation?: 'horizontal' | 'vertical';
		showLabel?: boolean;
		onSelect?: (name: string) => void;
		class?: string;
	}

	let {
		active,
		orientation = 'horizontal',
		showLabel = true,
		onSelect,
		class: className = ''
	}: DomainToolbarProps = $props();
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
