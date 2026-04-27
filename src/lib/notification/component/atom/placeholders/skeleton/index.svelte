<script lang="ts">
	import { createSkeletonState } from '$stylist/notification/function/state/skeleton';
	import type { SlotSkeleton as ISkeletonProps } from '$stylist/notification/interface/slot/skeleton';

	let props = $props<
		{
			variant?: 'text' | 'card' | 'image' | 'icon';
			width?: string;
			height?: string;
			class?: string;
		} & ISkeletonProps
	>();

	const state = createSkeletonState(props);
</script>

<div
	class={state.rootClass}
	style={state.style}
	aria-busy="true"
	aria-live="polite"
	{...state.restProps}
></div>
