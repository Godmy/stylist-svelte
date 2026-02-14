<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Icon } from '$stylist/components/atoms';
	import type { IconChevronProps } from '$stylist/design-system';
	import { createIconChevronState } from '$stylist/design-system/models/icon-chevron.svelte';

	type Props = IconChevronProps & HTMLAttributes<HTMLSpanElement>;

	let props: Props = $props();

	const state = createIconChevronState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				isOpen: _isOpen,
				size: _size,
				direction: _direction,
				variant: _variant,
				disabled: _disabled,
				...rest
			} = props;
			return rest;
		})()
	);

	// Determine the chevron icon name based on state
	const chevronIconName = state.isOpen ? 'chevron-up' : 'chevron-down';
</script>

<span class={state.classes} {...restProps}>
	<Icon name={chevronIconName} size={state.size === '2xl' ? 'xl' : state.size} />
</span>
