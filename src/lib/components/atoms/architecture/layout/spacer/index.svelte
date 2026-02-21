<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SpacerProps } from '$stylist/design-system';
	import { createSpacerState } from '$stylist/design-system/models/architecture/spacer.svelte';

	type Props = SpacerProps & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();
	const state = createSpacerState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, axis: _axis, size: _size, ...rest } = props;
			return rest;
		})()
	);
</script>

<div
	class={state.classes}
	style="--spacer-size: {state.sizeValue}"
	aria-hidden="true"
	{...restProps}
></div>
