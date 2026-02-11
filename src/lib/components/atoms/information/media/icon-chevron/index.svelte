<script lang="ts">
	import { Icon } from '$stylist/components/atoms';
	import type { IconChevronProps } from '$stylist/design-system';
	import { createIconChevronState } from '../state.svelte';

	let props: IconChevronProps = $props();

	const state = createIconChevronState(props);

	// Determine the chevron icon name based on state
	const chevronIconName = state.isOpen ? 'chevron-up' : 'chevron-down';
</script>

<span class={state.classes}>
	<Icon name={chevronIconName} size={state.size === '2xl' ? 'xl' : state.size} />
</span>
