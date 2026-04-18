<script lang="ts">
	import { createCardSkeletonState } from '$stylist/notification/function/state/card-skeleton';
	import type { SlotCardSkeleton as CardSkeletonProps } from '$stylist/notification/interface/slot/card-skeleton';
	import { Skeleton } from '../skeleton';

	let {
		count = 3,
		showAvatar = false,
		class: className = '',
		...restProps
	}: CardSkeletonProps = $props();

	const state = createCardSkeletonState({ count, showAvatar, class: className });
</script>

<div class={state.rootClass} {...restProps}>
	{#each state.cards as _}
		<div class={state.cardClass}>
			<div class="flex items-center space-x-4">
				{#if showAvatar}
					<Skeleton variant="icon" width="48px" height="48px" />
				{/if}
				<div class="flex-1 space-y-2">
					<Skeleton width="80%" height="1.25rem" />
					<Skeleton width="60%" height="1rem" />
				</div>
			</div>
			<div class="mt-4 space-y-2">
				<Skeleton width="100%" height="1rem" />
				<Skeleton width="90%" height="1rem" />
				<Skeleton width="70%" height="1rem" />
			</div>
		</div>
	{/each}
</div>





