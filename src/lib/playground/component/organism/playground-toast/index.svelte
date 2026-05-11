<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { onMount } from 'svelte';
	import { createPlaygroundToastState } from '$stylist/playground/function/state/playground-toast';
	import type { PlaygroundToastProps } from '$stylist/playground/type/struct/playground-toast-props';
	const Check = 'check';

	let props: PlaygroundToastProps = $props();
	const state = createPlaygroundToastState(props);

	onMount(() => {
		const timer = setTimeout(() => {
			state.onClose?.();
		}, state.duration);

		return () => clearTimeout(timer);
	});
</script>

<div
	class="toast fixed top-20 right-4 z-[10000] flex min-w-[300px] items-center gap-3 rounded-lg bg-green-500 px-4 py-3 text-white shadow-2xl"
>
	<div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
		<BaseIcon name={Check} class="h-4 w-4" />
	</div>
	<p class="flex-1 text-sm font-medium">{state.message}</p>
</div>

<style>
	.toast {
		animation: slideIn var(--duration-300) var(--animation-ease-out);
	}

	@keyframes slideIn {
		from {
			transform: translateY(-100%);
			opacity: var(--opacity-0);
		}
		to {
			transform: translateY(0);
			opacity: var(--opacity-100);
		}
	}
</style>
